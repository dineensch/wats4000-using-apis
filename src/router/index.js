import Vue from 'vue'
import Router from 'vue-router'
import Rhymesaurus from '@/components/Rhymesaurus'
import AdjectiveFind from '@/components/AdjectiveFind'
import AdjectiveRhyme from '@/components/AdjectiveRhyme'
import Swapi from '@/components/Swapi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rhymesaurus',
      component: Rhymesaurus
    },
    {
      path: '/AdjectiveFind',
      name: 'AdjectiveFind',
      component: AdjectiveFind
    },
    {
      path: '/AdjectiveRhyme',
      name: 'AdjectiveRhyme',
      component: AdjectiveRhyme
    },
    {
      path: '/Swapi',
      name: 'Swapi',
      component: Swapi
    }
  ]
})
