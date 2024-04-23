import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { requireAuth } from "../router-guards";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: requireAuth,
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('../components/BooksList.vue'),
      beforeEnter: requireAuth,
    },
    {
      path: '/infostaff',
      name: 'infostaff',
      component: () => import('../components/infostaff.vue'),
      beforeEnter: requireAuth,
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: () => import('../views/Inventory.vue'),
      beforeEnter: requireAuth,
      children: [
        {
          path: 'books',
          component: () => import('../components/BooksList.vue'),
        },
        {
          path: 'addbook',
          component: () => import('../components/AddBookForm.vue')
        },
        {
          path: 'updatebook/:id',
          component: () => import('../components/UpdateBookForm.vue')
        }
      ]
    },
    {
      path: '/uppublisher/:id',
      name: 'uppublisher',
      component: () => import('../components/UpdatePublisher.vue'),
      beforeEnter: requireAuth,
    },
    {
      path: '/addpublisher',
      name: 'addpublisher',
      component: () => import('../components/AddPublisher.vue'),
      beforeEnter: requireAuth,
    },
    {
      path: '/publishers',
      name: 'publishers',
      component: () => import('../components/PublisherList.vue'),
      beforeEnter: requireAuth,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
      ,beforeEnter: requireAuth,
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('../views/Orders.vue'),
      beforeEnter: requireAuth,
    },
    {
      path: '/customers',
      name: 'customers',
      component: () => import('../views/Customers.vue'),
      beforeEnter: requireAuth,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/loginpage.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../components/SearchBook.vue'),
    },
  ]
})



export default router