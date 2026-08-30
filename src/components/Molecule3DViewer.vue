<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  moleculePath: { type: String, default: 'molecules/lactic-acid.sdf' },
  formula: { type: String, default: 'C₃H₆O₃' },
  modelName: { type: String, default: 'Ácido lático' },
  atomCounts: { type: Object, default: () => ({ C: 3, O: 3, H: 6 }) },
})

const viewerElement = ref(null)
const loading = ref(true)
const error = ref('')
const focusedElement = ref('all')
const representation = ref('ball-stick')

let viewer = null
let resizeObserver = null
let atomLabels = []
let updatingLabels = false
let labelFrame = null

const elements = {
  C: { name: 'Carbono', color: '#a9bdd6', labelColor: '#172131' },
  O: { name: 'Oxigênio', color: '#ff6b5e', labelColor: '#fff7f6' },
  H: { name: 'Hidrogênio', color: '#eef4ff', labelColor: '#26364a' },
}

const focusDescription = computed(() => {
  if (focusedElement.value === 'all') {
    const total = Object.values(props.atomCounts).reduce((sum, count) => sum + count, 0)
    return `${total} átomos · ${props.formula}`
  }
  const element = elements[focusedElement.value]
  const count = props.atomCounts[focusedElement.value] || 0
  return `${element.name} · ${count} ${count === 1 ? 'átomo' : 'átomos'}`
})

function rotatedDepth(atom, view) {
  const [, , , , qx, qy, qz, qw] = view
  return (
    2 * (qx * qz - qw * qy) * atom.x
    + 2 * (qy * qz + qw * qx) * atom.y
    + (1 - 2 * (qx * qx + qy * qy)) * atom.z
  )
}

function updateLabelVisibility(view = viewer?.getView()) {
  if (!viewer || !viewerElement.value || !view) return false

  const activeLabels = atomLabels.filter(({ element }) => (
    focusedElement.value === 'all' || focusedElement.value === element
  ))
  const screenPositions = viewer.modelToScreen(activeLabels.map(({ atom }) => atom))
  const candidates = activeLabels
    .map((entry, index) => ({
      ...entry,
      screen: screenPositions[index],
      depth: rotatedDepth(entry.atom, view),
    }))
    .sort((a, b) => b.depth - a.depth)

  const visiblePositions = []
  const visibleLabels = new Set()

  candidates.forEach((candidate) => {
    const overlaps = visiblePositions.some((position) => (
      Math.hypot(candidate.screen.x - position.x, candidate.screen.y - position.y) < 17
    ))

    if (!overlaps) {
      visibleLabels.add(candidate.label)
      visiblePositions.push(candidate.screen)
    }
  })

  let changed = false
  atomLabels.forEach((entry) => {
    const shouldShow = visibleLabels.has(entry.label)
    if (entry.visible === shouldShow) return
    entry.visible = shouldShow
    if (shouldShow) entry.label.show()
    else entry.label.hide()
    changed = true
  })
  return changed
}

function scheduleLabelUpdate() {
  if (labelFrame) cancelAnimationFrame(labelFrame)
  labelFrame = requestAnimationFrame(() => {
    labelFrame = null
    if (!viewer) return
    updateLabelVisibility()
    viewer.render()
  })
}

function applyMoleculeStyle() {
  if (!viewer) return

  Object.entries(elements).forEach(([element, config]) => {
    const visible = focusedElement.value === 'all' || focusedElement.value === element
    const opacity = visible ? 1 : 0.12

    if (representation.value === 'space-fill') {
      viewer.setStyle(
        { elem: element },
        { sphere: { scale: 0.88, color: config.color, opacity } },
      )
    } else {
      viewer.setStyle(
        { elem: element },
        {
          stick: { radius: visible ? 0.17 : 0.1, color: config.color, opacity },
          sphere: {
            scale: element === 'H' ? 0.34 : visible ? 0.44 : 0.3,
            color: config.color,
            opacity,
          },
        },
      )
    }
  })

  viewer.render()
  scheduleLabelUpdate()
}

function focusElement(element) {
  focusedElement.value = element
  applyMoleculeStyle()
}

function setRepresentation(value) {
  representation.value = value
  applyMoleculeStyle()
}

function resetView() {
  if (!viewer) return
  viewer.zoomTo()
  viewer.rotate(18, 'y')
  viewer.rotate(-8, 'x')
  viewer.render()
  scheduleLabelUpdate()
}

function handleCanvasKeydown(event) {
  if (!viewer) return
  const rotations = { ArrowLeft: [8, 'y'], ArrowRight: [-8, 'y'], ArrowUp: [8, 'x'], ArrowDown: [-8, 'x'] }
  if (!rotations[event.key]) return
  event.preventDefault()
  viewer.rotate(...rotations[event.key])
  viewer.render()
  scheduleLabelUpdate()
}

async function createViewer() {
  try {
    const [moleculeData, $3Dmol] = await Promise.all([
      fetch(`${import.meta.env.BASE_URL}${props.moleculePath}`).then((response) => {
        if (!response.ok) throw new Error('Não foi possível carregar a estrutura molecular.')
        return response.text()
      }),
      import('3dmol/build/3Dmol.es6-min.js'),
    ])

    viewer = $3Dmol.createViewer(viewerElement.value, {
      backgroundColor: '#0a0f18',
      backgroundAlpha: 0,
      antialias: true,
    })
    viewer.addModel(moleculeData, 'sdf')

    viewer.selectedAtoms({}).forEach((atom) => {
      const element = elements[atom.elem]
      const label = viewer.addLabel(atom.elem, {
        position: atom,
        alignment: 'center',
        backgroundOpacity: 0,
        borderThickness: 0,
        font: 'Arial',
        fontColor: element?.labelColor || '#172131',
        fontSize: atom.elem === 'H' ? 12 : 14,
        fontOpacity: 1,
        inFront: true,
        showBackground: false,
      })
      atomLabels.push({ atom, element: atom.elem, label, visible: true })
    })

    viewer.setViewChangeCallback((view) => {
      if (updatingLabels || !updateLabelVisibility(view)) return
      updatingLabels = true
      viewer.render()
      updatingLabels = false
    })

    applyMoleculeStyle()
    resetView()
    viewer.resize()

    resizeObserver = new ResizeObserver(() => {
      viewer?.resize()
      scheduleLabelUpdate()
    })
    resizeObserver.observe(viewerElement.value)
  } catch (caughtError) {
    error.value = caughtError instanceof Error
      ? caughtError.message
      : 'Não foi possível iniciar a visualização 3D.'
  } finally {
    loading.value = false
  }
}

onMounted(createViewer)

onBeforeUnmount(() => {
  if (labelFrame) cancelAnimationFrame(labelFrame)
  resizeObserver?.disconnect()
  viewer?.setViewChangeCallback(null)
  viewer?.clear()
  atomLabels = []
  viewer = null
})
</script>

<template>
  <div class="molecule-3d">
    <div ref="viewerElement" class="molecule-3d__canvas" tabindex="0" role="application" :aria-label="`Modelo 3D de ${modelName}. Use as setas para rotacionar.`" @keydown="handleCanvasKeydown"></div>
    <p v-if="loading" class="molecule-3d__status" role="status">Preparando 3D…</p>
    <p v-else-if="error" class="molecule-3d__status molecule-3d__status--error" role="alert">
      {{ error }}
    </p>
    <p v-else class="molecule-3d__hint">
      <strong>{{ modelName }}</strong>
    </p>
    <button v-if="!loading && !error" type="button" class="molecule-3d__reset" @click="resetView">
      Centralizar
    </button>

    <div v-if="!loading && !error" class="molecule-3d__tools">
      <div class="representation-switch" aria-label="Tipo de modelo 3D">
        <button
          type="button"
          :class="{ active: representation === 'ball-stick' }"
          :aria-pressed="representation === 'ball-stick'"
          @click="setRepresentation('ball-stick')"
        >
          Bastões
        </button>
        <button
          type="button"
          :class="{ active: representation === 'space-fill' }"
          :aria-pressed="representation === 'space-fill'"
          @click="setRepresentation('space-fill')"
        >
          Espacial
        </button>
      </div>

      <div class="atom-filter" aria-label="Destacar elemento químico">
        <span>{{ focusDescription }}</span>
        <button
          v-for="element in ['all', 'C', 'O', 'H']"
          :key="element"
          type="button"
          :class="[`atom-filter--${element.toLowerCase()}`, { active: focusedElement === element }]"
          :aria-pressed="focusedElement === element"
          :aria-label="element === 'all' ? 'Mostrar todos os átomos' : `Destacar ${elements[element].name}`"
          @click="focusElement(element)"
        >
          {{ element === 'all' ? 'Todos' : element }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.molecule-3d,
.molecule-3d__canvas {
  position: absolute;
  inset: 0;
}

.molecule-3d__status {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  margin: 0;
  color: var(--text-soft);
  font-size: 0.82rem;
}

.molecule-3d__status--error {
  padding: 1rem;
  color: var(--red);
  text-align: center;
}

.molecule-3d__canvas,
.molecule-3d__canvas :deep(canvas) {
  cursor: grab;
  touch-action: none;
}

.molecule-3d__canvas:active,
.molecule-3d__canvas:active :deep(canvas) {
  cursor: grabbing;
}

.molecule-3d__hint {
  position: absolute;
  left: 0.85rem;
  top: 0.75rem;
  margin: 0;
  color: var(--muted);
  font: 0.65rem var(--font-mono);
  pointer-events: none;
  line-height: 1.35;
}

.molecule-3d__hint strong {
  display: block;
  margin-bottom: 0.1rem;
  color: var(--text-soft);
  font-size: 0.62rem;
}

.molecule-3d__reset {
  position: absolute;
  right: 0.75rem;
  top: 0.65rem;
  padding: 0.4rem 0.65rem;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  background: var(--control-bg);
  color: var(--text-soft);
  font: 600 0.66rem var(--font-body);
  cursor: pointer;
}

.molecule-3d__reset:hover,
.molecule-3d__reset:focus-visible {
  border-color: var(--amber);
  color: var(--amber);
  outline: none;
}

.molecule-3d__tools {
  position: absolute;
  z-index: 3;
  right: 0.65rem;
  bottom: 0.65rem;
  left: 0.65rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.6rem;
  pointer-events: none;
}

.representation-switch,
.atom-filter {
  display: inline-flex;
  align-items: center;
  gap: 0.18rem;
  padding: 0.2rem;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  background: var(--control-bg);
  backdrop-filter: blur(8px);
  pointer-events: auto;
}

.representation-switch button,
.atom-filter button {
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--muted);
  font: 700 0.6rem var(--font-mono);
  padding: 0.35rem 0.52rem;
  cursor: pointer;
}

.representation-switch button.active {
  background: var(--amber);
  color: var(--on-accent);
}

.atom-filter > span {
  max-width: 118px;
  overflow: hidden;
  padding: 0 0.35rem;
  color: var(--text-soft);
  font: 0.58rem var(--font-mono);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.atom-filter button.active {
  box-shadow: 0 0 0 1px currentColor;
  color: var(--text);
}

.atom-filter--c.active { background: #a9bdd6 !important; color: #172131 !important; }
.atom-filter--o.active { background: #ff6b5e !important; color: #fff7f6 !important; }
.atom-filter--h.active { background: #eef4ff !important; color: #26364a !important; }
.atom-filter--all.active { background: var(--surface-3) !important; }

.representation-switch button:focus-visible,
.atom-filter button:focus-visible {
  outline: 2px solid var(--amber);
  outline-offset: 2px;
}

@media (max-width: 620px) {
  .molecule-3d__tools {
    align-items: flex-start;
    flex-direction: column;
    right: 0.5rem;
    bottom: 0.5rem;
    left: 0.5rem;
    gap: 0.35rem;
  }

  .atom-filter > span { display: none; }

  .representation-switch,
  .atom-filter {
    max-width: 100%;
  }

  .representation-switch button,
  .atom-filter button {
    min-height: 2rem;
  }
}

@media (max-width: 360px) {
  .molecule-3d__reset {
    right: 0.55rem;
    padding-inline: 0.5rem;
    font-size: 0.6rem;
  }

  .representation-switch button,
  .atom-filter button {
    padding-inline: 0.42rem;
  }
}
</style>
