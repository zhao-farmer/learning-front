import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/project01',
    name: 'project01',
    component: () => import('../views/Project01.vue')
  },
  {
    path: '/project02',
    name: 'project02',
    component: () => import('../views/Project02.vue')
  },
  {
    path: '/project03',
    name: 'project03',
    component: () => import('../views/Project03.vue')
  },
  {
    path: '/project04',
    name: 'project04',
    component: () => import('../views/Project04.vue')
  },
  {
    path: '/project05',
    name: 'project05',
    component: () => import('../views/Project05.vue')
  },
  {
    path: '/project06',
    name: 'project06',
    component: () => import('../views/Project06.vue')
  },
  {
    path: '/project07',
    name: 'project07',
    component: () => import('../views/Project07.vue')
  },
  {
    path: '/project08',
    name: 'project08',
    component: () => import('../views/Project08.vue')
  },
  {
    path: '/project09',
    name: 'project09',
    component: () => import('../views/Project09.vue')
  },
  {
    path: '/project10',
    name: 'project10',
    component: () => import('../views/Project10.vue')
  },
  {
    path: '/project11',
    name: 'project11',
    component: () => import('../views/Project11.vue')
  },
  {
    path: '/project12',
    name: 'project12',
    component: () => import('../views/Project12.vue')
  },
  {
    path: '/project13',
    name: 'project13',
    component: () => import('../views/Project13.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
