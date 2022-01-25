import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/chat',
    name: 'chat',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ChatView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
