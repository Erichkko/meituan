import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/index'
    },
    {
      path: '/home',
      component: resolve=>require(['../components/Home.vue'],resolve),
      children:[
        {
          path: 'order',
          component: resolve=>require(['../pages/Order.vue'],resolve)
        },{
          path: 'mine',
          component: resolve=>require(['../pages/Mine.vue'],resolve)
        },{
          path: 'index',
          component: resolve=>require(['../pages/Index.vue'],resolve)
        }
      ]
    }
  ]
})
