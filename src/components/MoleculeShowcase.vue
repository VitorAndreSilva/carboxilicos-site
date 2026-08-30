<script setup>
import { ref } from 'vue'
import Molecule from './Molecule.vue'
import Molecule3DViewer from './Molecule3DViewer.vue'

const props = defineProps({
  atoms: { type: Array, required: true },
  bonds: { type: Array, required: true },
  view: { type: String, required: true },
  scale: { type: Number, default: 1 },
  name: { type: String, required: true },
  has3d: { type: Boolean, default: false },
  moleculePath: { type: String, default: 'molecules/lactic-acid.sdf' },
  formula: { type: String, default: 'C₃H₆O₃' },
  modelName: { type: String, default: 'Ácido lático' },
  atomCounts: { type: Object, default: () => ({ C: 3, O: 3, H: 6 }) },
  initialMode: { type: String, default: '2d' },
  show2d: { type: Boolean, default: true },
})

const mode = ref((!props.show2d || props.initialMode === '3d') && props.has3d ? '3d' : '2d')
</script>

<template>
  <div class="molecule-showcase" :class="{ 'molecule-showcase--interactive': has3d }">
    <div v-if="has3d && show2d" class="mode-switch" aria-label="Dimensão da representação molecular">
      <button type="button" :class="{ active: mode === '2d' }" :aria-pressed="mode === '2d'" @click="mode = '2d'">
        2D
      </button>
      <button type="button" :class="{ active: mode === '3d' }" :aria-pressed="mode === '3d'" @click="mode = '3d'">
        3D
      </button>
    </div>

    <div
      class="molecule-showcase__viewport"
      :class="{
        'molecule-showcase__viewport--3d': mode === '3d',
        'molecule-showcase__viewport--3d-switch': mode === '3d' && has3d && show2d,
      }"
    >
      <Molecule
        v-if="mode === '2d'"
        :atoms="atoms"
        :bonds="bonds"
        :view="view"
        :scale="scale"
        :aria-label="`Representação 2D de ${name}`"
      />
      <Molecule3DViewer
        v-else
        :molecule-path="moleculePath"
        :formula="formula"
        :model-name="modelName"
        :atom-counts="atomCounts"
      />
    </div>

    <div class="element-legend" aria-label="Legenda dos elementos químicos">
      <span><i class="element-dot element-dot--carbon"></i><b>C</b> Carbono</span>
      <span><i class="element-dot element-dot--oxygen"></i><b>O</b> Oxigênio</span>
      <span><i class="element-dot element-dot--hydrogen"></i><b>H</b> Hidrogênio</span>
    </div>
  </div>
</template>

<style scoped>
.molecule-showcase {
  position: relative;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background:
    radial-gradient(circle at 50% 42%, rgba(111, 178, 255, 0.08), transparent 43%),
    linear-gradient(180deg, var(--surface), var(--bg-2));
}

.molecule-showcase--interactive {
  border-color: rgba(255, 200, 87, 0.28);
}

.molecule-showcase__viewport {
  position: relative;
  display: grid;
  place-items: center;
  height: 230px;
  padding: 2.5rem 1.4rem 2.2rem;
}

.molecule-showcase__viewport--3d {
  padding: 0;
}

.molecule-showcase__viewport--3d-switch :deep(.molecule-3d__hint) {
  top: 3.25rem;
  left: 0.85rem;
}

.molecule-showcase__viewport :deep(.molecule) {
  width: 100%;
  height: 100%;
  max-width: 360px;
}

.mode-switch {
  position: absolute;
  z-index: 4;
  left: 0.75rem;
  top: 0.7rem;
  display: flex;
  padding: 0.2rem;
  border: 1px solid var(--line-strong);
  border-radius: 999px;
  background: var(--control-bg);
  backdrop-filter: blur(8px);
}

.mode-switch button {
  min-width: 2.5rem;
  padding: 0.38rem 0.65rem;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--muted);
  font: 700 0.68rem var(--font-mono);
  cursor: pointer;
}

.mode-switch button.active {
  background: var(--amber);
  color: var(--on-accent);
}

.mode-switch button:focus-visible {
  outline: 2px solid var(--amber);
  outline-offset: 2px;
}

.element-legend {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.4rem 0.8rem;
  min-height: 2.25rem;
  padding: 0.55rem 0.7rem;
  border-top: 1px solid var(--line);
  background: var(--control-bg-soft);
  color: var(--muted);
  font-size: 0.64rem;
}

.element-legend span {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.element-legend b {
  color: var(--text-soft);
}

.element-dot {
  width: 0.55rem;
  height: 0.55rem;
  border-radius: 50%;
  box-shadow: inset -1px -1px 2px rgba(0, 0, 0, 0.35);
}

.element-dot--carbon { background: #a9bdd6; }
.element-dot--oxygen { background: #ff6b5e; }
.element-dot--hydrogen { background: #eef4ff; }

@media (max-width: 620px) {
  .molecule-showcase__viewport { height: 210px; }

  .molecule-showcase__viewport--3d {
    height: 280px;
  }

  .molecule-showcase__viewport--3d-switch :deep(.molecule-3d__hint) {
    left: 0.8rem;
    top: 3.25rem;
    max-width: calc(100% - 1.6rem);
  }
}
</style>
