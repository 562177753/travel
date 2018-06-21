import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'



Vue.use(Router)

//导出默认 的路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
   
  ]
})
