<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const scrolled = ref(false)
const open = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 24
}

function closeMenu() {
  open.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})

const links = [
  { to: '/', label: 'Início' },
  { to: '/estrutura', label: 'Estrutura' },
  { to: '/historia', label: 'História' },
  { to: '/importancia', label: 'Importância' },
  { to: '/aplicacoes', label: 'Aplicações' },
  { to: '/sociedade', label: 'Sociedade' },
]
</script>

<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <div class="header-inner">
      <RouterLink to="/" class="brand" @click="closeMenu">
        <span class="brand-mark" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
            <circle cx="13" cy="15" r="3.2" fill="#a9bdd6" />
            <path d="M15.5 15h4.6" stroke="#e9eef7" stroke-width="1.7" />
            <circle cx="22" cy="11" r="3.2" fill="#ff6b5e" />
            <path d="M22 14.2 20.6 18.8" stroke="#e9eef7" stroke-width="1.4" />
            <circle cx="20" cy="22" r="3.2" fill="#ff6b5e" />
            <path d="M22 22h.01" stroke="#e9eef7" stroke-width="1.7" />
            <path d="M13 11.8v-2" stroke="#e9eef7" stroke-width="1.7" />
            <circle cx="13" cy="7.8" r="2" fill="#e9eef7" />
          </svg>
        </span>
        <span>
          Ácidos Carboxílicos
          <small>Guia · Química Geral</small>
        </span>
      </RouterLink>

      <nav class="nav-links" :class="{ open }" aria-label="Navegação principal">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          :class="{ home: link.to === '/' }"
          @click="closeMenu"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <button class="nav-toggle" :aria-expanded="open" aria-label="Abrir menu" @click="open = !open">
        <svg v-if="!open" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M5 5l14 14M19 5L5 19" />
        </svg>
      </button>
    </div>
  </header>
</template>