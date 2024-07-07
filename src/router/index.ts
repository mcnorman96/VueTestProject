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
      name: 'users',
      // route level code-splitting
      // this generates a separate chunk (user.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UsersView.vue'),
      meta:{
        breadcrumb: "Users"
      }
    },
    {
      path: '/users/:id',
      name: 'user:id',
      // route level code-splitting
      // this generates a separate chunk (user.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UserView.vue'),
      props: { default: true }
    },
    {
      path: '/products',
      name: 'products',
      // route level code-splitting
      // this generates a separate chunk (product.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductsView.vue'),
      props: { default: true }
    },
    {
      path: '/products/:id',
      name: 'product:id',
      // route level code-splitting
      // this generates a separate chunk (products.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductView.vue'),
      props: { default: true }
    }
  ]
})

export default router
