import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component:()=>import('../components/index'),
      
    },
    
    {
      path: '/showblog',
      name: 'showblog',
      component:()=>import('../components/showblog'),
      
    },
    {
      path:'/addblog',
      name:'addblog',
      component:()=>import('../components/addblog')
    },
    {
      path:'/blog/:id',
      name:'singleblog',
      component:()=>import('../components/singleblog')
    },
    {
      path:'/editblog/:id',
      name:'editblog',
      component:()=>import('../components/editblog')

    }

  ]
})
