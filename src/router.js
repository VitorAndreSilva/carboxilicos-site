import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { index: 0, title: 'Início' },
  },
  {
    path: '/estrutura',
    name: 'estrutura',
    component: () => import('./views/EstruturaView.vue'),
    meta: { index: 1, title: 'Estrutura & Propriedades' },
  },
  {
    path: '/historia',
    name: 'historia',
    component: () => import('./views/HistoriaView.vue'),
    meta: { index: 2, title: 'História' },
  },
  {
    path: '/importancia',
    name: 'importancia',
    component: () => import('./views/ImportanciaView.vue'),
    meta: { index: 3, title: 'Importância' },
  },
  {
    path: '/aplicacoes',
    name: 'aplicacoes',
    component: () => import('./views/AplicacoesView.vue'),
    meta: { index: 4, title: 'Aplicações & Usos' },
  },
  {
    path: '/aplicacoes/acido-latico',
    name: 'acido-latico',
    component: () => import('./views/AcidoLaticoView.vue'),
    meta: { index: 4, title: 'Ácido Lático' },
  },
  {
    path: '/aplicacoes/:slug',
    name: 'perfil-acido',
    component: () => import('./views/AcidProfileView.vue'),
    meta: { index: 4, title: 'Perfil molecular' },
  },
  {
    path: '/sociedade',
    name: 'sociedade',
    component: () => import('./views/SociedadeView.vue'),
    meta: { index: 5, title: 'Sociedade & Comércio' },
  },
  {
    path: '/referencias',
    name: 'referencias',
    component: () => import('./views/ReferenciasView.vue'),
    meta: { index: 6, title: 'Referências' },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  const profileTitle = to.name === 'perfil-acido'
    ? to.params.slug.replace('acido-', 'Ácido ').replaceAll('-', ' ')
    : to.meta.title
  document.title = profileTitle
    ? `${profileTitle} · Ácidos Carboxílicos`
    : 'Ácidos Carboxílicos · Guia Interativo de Química'
})

export default router
