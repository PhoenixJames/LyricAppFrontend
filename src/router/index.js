import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Contact from '@/components/Contact'
import LyricView from '@/components/LyricView'
import LyricDetail from '@/components/LyricDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      name: 'Home', 
      component: Home 
    },
    {
      path: '/home', 
      name: 'Home', 
      component: Home 
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/lyricview',
      name: 'LyricView',
      component: LyricView
    },
    {
      path: '/lyricdetail/:lyricId',
      name: 'LyricDetail',
      component: LyricDetail
    }
    
  ]
})
