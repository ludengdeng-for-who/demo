import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home';
import Vip from '@/components/Vip/Vip';
import Search from '@/components/Search/Search';
import Gouwuche from '@/components/Gouwuche/Gouwuche';
import NewsList from '@/components/newsList/newsList';
import NewsDetails from '@/components/newsDetails/newsDetails';
import Photos from '@/components/Photos/Photos';
Vue.use(Router);



export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/Home'
    },
    {
      path: '/Home',
      name: 'home',
      component: Home
    },
    {
      path: '/Vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/Search',
      name: 'search',
      component: Search
    },
    {
      path: '/Gouwuche',
      name: 'gouwuche',
      component: Gouwuche
    },
    {
      path: '/news/list',
      name: 'newsList',
      component: NewsList
    },
    {
      path:'/news/details',
      name:'details',
      component:NewsDetails
    },
    {
      path:'/photos/:dynamicId',
      name:'photos',
      component:Photos
    }
  ]
})
