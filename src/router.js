import Vue from 'vue'
import Router from 'vue-router'
import StarshipsList from '@/views/StarshipsList'
import { publicPath } from '../vue.config'
import store from './store'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: publicPath,
  routes: [
    {
      name: 'Starships',
      path: '/',
      component: StarshipsList
    },
    {
      name: 'Starship',
      path: '/starship',
      component: () => import('@/views/StarshipPage.vue')
    }
  ]
})

router.afterEach((to) => {
  if (to.name === 'Starship') {
    store.dispatch('fetchStarshipData', to.query.starship)
  }
  if (to.name === 'Starships') {
    store.commit('updateSearchText', to.query.search)
    store.dispatch('fetchStarshipsList')
  }
})

export default router