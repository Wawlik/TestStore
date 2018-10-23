import Vue from 'vue'
import Router from 'vue-router'
import navbar from '@/components/navbar'
import offers from '@/components/offers'

Vue.use(Router)

export default new Router({
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
    },

  ]
})
