import Vue from 'vue'
import Router from 'vue-router'
import Rank from '../components/rank/rank.vue'
import recommend from '../components/recommend/recommend.vue'
import search from '../components/search/search.vue'
import singer from '../components/singer/singer.vue'
import SingerDetail from '../components/singer-detail/singer-detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/singer',
      name: 'singer',
      component: singer,
      children: [
        {
          path: ':id',
          name: 'SingerDetail',
          component: SingerDetail
        }
      ]
    }
  ]
})
