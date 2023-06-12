import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/leeruitkomsten',
      name: 'leeruitkomsten',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Kathleen',
      name: 'kathleen',
      component: () => import('../views/Kathleen.vue')
    },
    {
      path: '/KeeperSprint1',
      name: 'keeperSprint1',
      component: () => import('../views/KeeperSprint1.vue')
    },
    {
      path: '/KeeperSprint2',
      name: 'keeperSprint2',
      component: () => import('../views/KeeperSprint2.vue')
    },
    {
      path: '/MacSprint1',
      name: 'macSprint1',
      component: () => import('../views/MacSprint1.vue')
    },
    {
      path: '/MacSprint2',
      name: 'macSprint2',
      component: () => import('../views/MacSprint2.vue')
    },
    {
      path: '/naakt',
      name: 'naakt',
      component: () => import('../views/Naakt.vue')
    }
  ]
})

export default router
