import Vue from 'vue'
import Router from 'vue-router'
import offers from '@/components/offers'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'offers',
      component: offers
    },
    {
      path: '/cart',
      name: 'offers',
      component: offers
    },

    {
      path: '/wishlist',
      name: 'offers',
      component: offers
    }

  ]
})
