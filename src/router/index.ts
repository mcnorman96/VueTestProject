import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        breadcrumb: "Home"
      }
    },
    {
      path: '/users',
      children: [
        { path: '', name: 'users', component: () => import('../views/UsersView.vue')},
        { path: ':id', name: 'user:id', component: () => import('../views/UserView.vue'), props: {default: true} },
      ], 
      meta: {
        breadcrumb: "Users"
      }
    },
    {
      path: '/products',
      children: [
        { path: '', name: 'products', component: () => import('../views/ProductsView.vue'), props: {default: true}},
        { path: ':id', name: 'product:id', component: () => import('../views/ProductView.vue'), props: {default: true} },
      ],
      meta: {
        breadcrumb: "Products"
      }
    }
  ]
})

export default router
