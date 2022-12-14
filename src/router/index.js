import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeHeader from '@/components/organisms/HomeHeader.vue'
import HomeAbout from '@/components/organisms/HomeAbout.vue'
import HomeSkills from '@/components/organisms/HomeSkills.vue'
import HomeProducts from '@/components/organisms/HomeWorks.vue'
import HomeFooter from '@/components/organisms/HomeFooter.vue'
import WorksEC from '@/components/organisms/works/WorksEC.vue'
import WorksCafe from '@/components/organisms/works/WorksCafe.vue'
import WorksPortfolio from '@/components/organisms/works/WorksPortfolio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: HomeHeader,
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
  },
  {
    path: '/shop',
    name: 'shop',
    component: WorksEC
  },
  {
    path: '/cafe',
    name: 'cafe',
    component: WorksCafe
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: WorksPortfolio
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(savedPosition)
        }, 500)
      })
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ x: 0, y: 0 })
        }, 500)
      })
    }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
