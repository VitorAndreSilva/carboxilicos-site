<script setup>
import { computed, ref } from 'vue'

const yaw = ref(-0.35)
const pitch = ref(-0.42)
const dragging = ref(false)
const highlight = ref('all')
let lastX = 0
let lastY = 0

const lipids = Array.from({ length: 35 }, (_, index) => {
  const column = index % 7
  const row = Math.floor(index / 7)
  return { x: (column - 3) * 0.92, z: (row - 2) * 0.82, offset: (row % 2) * 0.16 }
})

function rotate(point) {
  const cy = Math.cos(yaw.value), sy = Math.sin(yaw.value)
  const cp = Math.cos(pitch.value), sp = Math.sin(pitch.value)
  const x1 = point.x * cy + point.z * sy
  const z1 = -point.x * sy + point.z * cy
  return { x: x1, y: point.y * cp - z1 * sp, z: point.y * sp + z1 * cp }
}

function project(point) {
  const rotated = rotate(point)
  const perspective = 1 / (1 + (rotated.z + 4.5) * 0.055)
  return { x: 350 + rotated.x * 72 * perspective, y: 180 - rotated.y * 72 * perspective, z: rotated.z, scale: perspective }
}

const particles = computed(() => {
  const result = []
  lipids.forEach((lipid, index) => {
    ;[-1, 1].forEach((side) => {
      const head = project({ x: lipid.x + lipid.offset, y: side * 1.35, z: lipid.z })
      const neck = project({ x: lipid.x + lipid.offset, y: side * 1.02, z: lipid.z })
      const tailA = project({ x: lipid.x - 0.12 + lipid.offset, y: side * 0.18, z: lipid.z - 0.08 })
      const tailB = project({ x: lipid.x + 0.17 + lipid.offset, y: side * 0.18, z: lipid.z + 0.1 })
      result.push({ id: `${index}-${side}`, head, neck, tailA, tailB, depth: head.z })
    })
  })
  return result.sort((a, b) => a.depth - b.depth)
})

function pointerDown(event) {
  dragging.value = true
  lastX = event.clientX
  lastY = event.clientY
  event.currentTarget.setPointerCapture(event.pointerId)
}

function pointerMove(event) {
  if (!dragging.value) return
  yaw.value += (event.clientX - lastX) * 0.008
  pitch.value = Math.max(-1.05, Math.min(0.35, pitch.value + (event.clientY - lastY) * 0.006))
  lastX = event.clientX
  lastY = event.clientY
}

function reset() {
  yaw.value = -0.35
  pitch.value = -0.42
}

function keyRotate(event) {
  const movement = { ArrowLeft: [-0.12, 0], ArrowRight: [0.12, 0], ArrowUp: [0, -0.1], ArrowDown: [0, 0.1] }[event.key]
  if (!movement) return
  event.preventDefault()
  yaw.value += movement[0]
  pitch.value = Math.max(-1.05, Math.min(0.35, pitch.value + movement[1]))
}
</script>

<template>
  <div class="membrane-model">
    <div class="membrane-toolbar">
      <div class="membrane-switch" aria-label="Destacar parte da membrana">
        <button v-for="option in [{id:'all',label:'Completa'},{id:'heads',label:'Cabeças'},{id:'tails',label:'Caudas'}]"
          :key="option.id" type="button" :class="{ active: highlight === option.id }" :aria-pressed="highlight === option.id" @click="highlight = option.id">
          {{ option.label }}
        </button>
      </div>
      <button type="button" class="reset-button" @click="reset">Centralizar</button>
    </div>

    <svg viewBox="0 0 700 360" role="application" tabindex="0" aria-label="Modelo 3D interativo de uma bicamada fosfolipídica. Arraste ou use as setas para rotacionar."
      :class="{ dragging }" @pointerdown="pointerDown" @pointermove="pointerMove" @pointerup="dragging = false" @pointercancel="dragging = false" @keydown="keyRotate">
      <defs>
        <radialGradient id="headGradient" cx="35%" cy="30%"><stop offset="0" stop-color="#d9f8ff"/><stop offset=".38" stop-color="#6fb2ff"/><stop offset="1" stop-color="#315f95"/></radialGradient>
        <linearGradient id="tailGradient" x1="0" x2="1"><stop stop-color="#ffc857"/><stop offset="1" stop-color="#ff8e45"/></linearGradient>
        <filter id="softShadow"><feDropShadow dx="0" dy="3" stdDeviation="3" flood-opacity=".35"/></filter>
      </defs>
      <g v-for="particle in particles" :key="particle.id">
        <line :x1="particle.neck.x" :y1="particle.neck.y" :x2="particle.tailA.x" :y2="particle.tailA.y"
          stroke="url(#tailGradient)" stroke-width="5" stroke-linecap="round" :opacity="highlight === 'heads' ? .12 : .88" />
        <line :x1="particle.neck.x" :y1="particle.neck.y" :x2="particle.tailB.x" :y2="particle.tailB.y"
          stroke="url(#tailGradient)" stroke-width="5" stroke-linecap="round" :opacity="highlight === 'heads' ? .12 : .88" />
        <circle :cx="particle.head.x" :cy="particle.head.y" :r="13 * particle.head.scale" fill="url(#headGradient)"
          stroke="#bfe9ff" stroke-opacity=".35" filter="url(#softShadow)" :opacity="highlight === 'tails' ? .14 : 1" />
      </g>
    </svg>

    <div class="membrane-legend">
      <span><i class="head-dot"></i><b>Cabeça polar</b> em contato com água</span>
      <span><i class="tail-line"></i><b>Caudas de ácidos graxos</b> voltadas para o interior</span>
    </div>
    <p class="membrane-note">Nos fosfolipídios, os ácidos graxos ligam-se ao glicerol por ligações éster; a cabeça polar também contém fosfato.</p>
    <p class="membrane-hint">Arraste o modelo para observar a bicamada em diferentes ângulos.</p>
  </div>
</template>

<style scoped>
.membrane-model{position:relative;overflow:hidden;border:1px solid rgba(111,178,255,.28);border-radius:var(--radius-lg);background:radial-gradient(circle at 50% 45%,rgba(111,178,255,.1),transparent 46%),var(--bg-2)}.membrane-toolbar{position:absolute;z-index:2;top:.75rem;right:.75rem;left:.75rem;display:flex;justify-content:space-between;gap:.5rem;pointer-events:none}.membrane-switch,.reset-button{border:1px solid var(--line-strong);border-radius:999px;background:var(--control-bg);backdrop-filter:blur(8px);pointer-events:auto}.membrane-switch{display:flex;padding:.2rem}.membrane-switch button,.reset-button{border:0;background:transparent;color:var(--muted);font:700 .62rem var(--font-mono);cursor:pointer}.membrane-switch button{padding:.4rem .6rem;border-radius:999px}.membrane-switch button.active{background:var(--amber);color:var(--on-accent)}.reset-button{padding:.45rem .7rem;color:var(--text-soft)}button:focus-visible{outline:2px solid var(--amber);outline-offset:2px}.membrane-model svg{display:block;width:100%;height:auto;min-height:310px;cursor:grab;touch-action:none;user-select:none}.membrane-model svg.dragging{cursor:grabbing}.membrane-legend{display:flex;flex-wrap:wrap;justify-content:center;gap:.5rem 1.2rem;padding:.75rem 1rem;border-top:1px solid var(--line);color:var(--muted);font-size:.66rem}.membrane-legend span{display:flex;align-items:center;gap:.35rem}.head-dot{width:.7rem;height:.7rem;border-radius:50%;background:#6fb2ff}.tail-line{width:1rem;height:3px;border-radius:2px;background:var(--amber)}.membrane-note{max-width:66ch;margin:.7rem auto .25rem;padding:0 1rem;color:var(--text-soft);font-size:.65rem;text-align:center}.membrane-hint{margin:0;padding:0 1rem .7rem;color:var(--muted-2);font:.58rem var(--font-mono);text-align:center}
@media(max-width:520px){.membrane-toolbar{align-items:flex-end;flex-direction:column}.membrane-switch{align-self:flex-start}.membrane-model svg{min-height:280px;margin-top:1.6rem}.membrane-legend{align-items:flex-start;flex-direction:column}.membrane-switch button{padding-inline:.48rem;font-size:.57rem}}
@media(prefers-reduced-motion:reduce){.membrane-model *{scroll-behavior:auto!important;animation:none!important;transition:none!important}}
</style>
