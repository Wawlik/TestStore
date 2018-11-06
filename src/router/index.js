import Vue from 'vue'
import Router from 'vue-router'
import offers from '@/components/offers'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:place',
      name: 'offers',
      component: offers,
      props: true
    }
  ]
})
