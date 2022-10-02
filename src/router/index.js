import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeHeader from '@/components/organisms/HomeHeader.vue'
import HomeAbout from '@/components/organisms/HomeAbout.vue'
import HomeSkills from '@/components/organisms/HomeSkills.vue'
import HomeProducts from '@/components/organisms/HomeProducts.vue'
import HomeFooter from '@/components/organisms/HomeFooter.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: HomeView,
      header: HomeHeader,
      about: HomeAbout,
      skills: HomeSkills,
      products: HomeProducts,
      footer: HomeFooter,
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
