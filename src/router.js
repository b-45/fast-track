import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Inventory from './views/Inventory.vue'
import Orders from './views/Orders.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/orders',
      name: 'Orders',
      component: Orders
    },
    {
      path: '/inventory',
      name: 'Inventory',
      component: Inventory
    },

  ]
})