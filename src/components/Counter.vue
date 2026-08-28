<script setup>
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue'

const props = defineProps({
  to: { type: Number, required: true },
  duration: { type: Number, default: 1800 },
  decimals: { type: Number, default: 0 },
  prefix: { type: String, default: '' },
  suffix: { type: String, default: '' },
})

const el = ref(null)
const display = ref(0)
let raf = null

function easeOut(t) {
  return 1 - Math.pow(2, -10 * t)
}

function animate() {
  const start = performance.now()
  const step = (now) => {
    const t = Math.min((now - start) / props.duration, 1)
    display.value = props.to * easeOut(t)
    if (t < 1) raf = requestAnimationFrame(step)
    else display.value = props.to
  }
  raf = requestAnimationFrame(step)
}

const formatted = computed(() =>
  display.value.toLocaleString('pt-BR', {
    minimumFractionDigits: props.decimals,
    maximumFractionDigits: props.decimals,
  })
)

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate()
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.4 }
  )
  if (el.value) observer.observe(el.value)
})

onBeforeUnmount(() => {
  observer && observer.disconnect()
  raf && cancelAnimationFrame(raf)
})
</script>

<template>
  <span ref="el" class="counter">
    {{ prefix }}{{ formatted }}{{ suffix }}
  </span>
</template>

<style scoped>
.counter {
  font-variant-numeric: tabular-nums;
}
</style>