<script setup>
import { computed } from 'vue'

const props = defineProps({
  atoms: { type: Array, required: true },
  bonds: { type: Array, required: true },
  view: { type: String, default: '0 0 160 100' },
  scale: { type: Number, default: 1 },
  showLabels: { type: Boolean, default: true },
  class: { type: String, default: '' },
})

const ELEMENTS = {
  C: { fill: '#a9bdd6', r: 11 },
  O: { fill: '#ff6b5e', r: 9.4 },
  H: { fill: '#eef4ff', r: 6.4 },
  R: { fill: 'none', r: 12, dashed: true },
}

function radius(el) {
  return (ELEMENTS[el]?.r || 8) * props.scale
}

function bondLines(bond) {
  const a = props.atoms[bond[0]]
  const b = props.atoms[bond[1]]
  const order = bond[2] || 1
  const dx = b.x - a.x
  const dy = b.y - a.y
  const len = Math.hypot(dx, dy) || 1
  const nx = (-dy / len) * 2.6 * props.scale
  const ny = (dx / len) * 2.6 * props.scale

  if (order === 2) {
    return [
      { x1: a.x + nx, y1: a.y + ny, x2: b.x + nx, y2: b.y + ny },
      { x1: a.x - nx, y1: a.y - ny, x2: b.x - nx, y2: b.y - ny },
    ]
  }
  return [{ x1: a.x, y1: a.y, x2: b.x, y2: b.y }]
}

const lines = computed(() => props.bonds.flatMap(bondLines))

function atomStyle(el) {
  return ELEMENTS[el] || ELEMENTS.C
}

function labelPos(el, x, y) {
  const r = radius(el)
  return { x, y: y + r + 7 * props.scale }
}

const labelFont = computed(() => `${6.6 * props.scale}px 'IBM Plex Mono', monospace`)
const pulseRadius = computed(() => radius('C') * 2.4)
</script>

<template>
  <svg :viewBox="view" class="molecule" :class="class" role="img" aria-label="Representação molecular em bolas e bastões">
    <defs>
      <radialGradient id="molGlow" cx="50%" cy="40%" r="65%">
        <stop offset="0%" stop-color="rgba(255,255,255,0.5)" />
        <stop offset="35%" stop-color="rgba(255,255,255,0)" />
        <stop offset="100%" stop-color="rgba(0,0,0,0.25)" />
      </radialGradient>
    </defs>

    <g stroke="rgba(233,238,247,0.55)" stroke-width="3.2" stroke-linecap="round" fill="none">
      <line
        v-for="(l, i) in lines"
        :key="i"
        :x1="l.x1"
        :y1="l.y1"
        :x2="l.x2"
        :y2="l.y2"
      />
    </g>

    <g v-for="(atom, i) in atoms" :key="i">
      <circle
        v-if="atom.pulse"
        :cx="atom.x"
        :cy="atom.y"
        :r="pulseRadius * (0.45 + (atom.pulseT || 0.4))"
        fill="rgba(255,200,87,0)"
        stroke="rgba(255,200,87,0.7)"
        stroke-width="1.4"
        class="atom-pulse"
      />
      <circle
        :cx="atom.x"
        :cy="atom.y"
        :r="radius(atom.el)"
        :stroke="atomStyle(atom.el).dashed ? 'rgba(160,175,205,0.85)' : 'rgba(0,0,0,0.28)'"
        :stroke-width="atomStyle(atom.el).dashed ? 2 : 1.2"
        :stroke-dasharray="atomStyle(atom.el).dashed ? '4 3' : undefined"
        :fill="atomStyle(atom.el).fill"
        style="filter: drop-shadow(0 0 6px rgba(0,0,0,0.35))"
      />
      <circle
        :cx="atom.x - radius(atom.el) * 0.32"
        :cy="atom.y - radius(atom.el) * 0.36"
        :r="radius(atom.el) * 0.42"
        fill="url(#molGlow)"
      />
      <text
        v-if="showLabels && atom.el !== 'R'"
        :x="labelPos(atom.el, atom.x, atom.y).x + radius(atom.el) * 0.5"
        :y="labelPos(atom.el, atom.x, atom.y).y"
        :font-size="labelFont"
        font-family="'IBM Plex Mono', monospace"
        font-weight="600"
        :fill="atom.el === 'O' ? '#ffb8b1' : '#dfe8f5'"
        text-anchor="middle"
      >
        {{ atom.el }}
      </text>
      <text
        v-else-if="atom.el === 'R'"
        :x="atom.x + radius(atom.el) + 8 * props.scale"
        :y="atom.y + 7 * props.scale"
        :font-size="16 * props.scale"
        font-family="'IBM Plex Mono', monospace"
        font-weight="600"
        fill="#c9b6ff"
        font-style="italic"
      >
        R
      </text>
    </g>
  </svg>
</template>

<style scoped>
.molecule {
  width: 100%;
  height: auto;
  display: block;
}

.atom-pulse {
  animation: atomPulse 2.6s ease-in-out infinite;
  transform-origin: center;
  transform-box: fill-box;
}

@keyframes atomPulse {
  0%,
  100% {
    opacity: 0.5;
    transform: scale(0.85);
  }
  50% {
    opacity: 0.05;
    transform: scale(1.08);
  }
}
</style>