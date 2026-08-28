<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  delay: { type: Number, default: 0 },
  as: { type: String, default: 'div' },
})

const el = ref(null)
let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  )
  if (el.value) observer.observe(el.value)
})

onBeforeUnmount(() => observer && observer.disconnect())
</script>

<template>
  <component :is="as" ref="el" class="reveal" :style="{ transitionDelay: `${delay}ms` }">
    <slot />
  </component>
</template>