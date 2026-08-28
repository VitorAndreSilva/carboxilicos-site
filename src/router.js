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
    path: '/sociedade',
    name: 'sociedade',
    component: () => import('./views/SociedadeView.vue'),
    meta: { index: 5, title: 'Sociedade & Comércio' },
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
  document.title = to.meta.title
    ? `${to.meta.title} · Ácidos Carboxílicos`
    : 'Ácidos Carboxílicos · Guia Interativo de Química'
})

export default router