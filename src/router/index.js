import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Training from '../views/Training.vue'
import Resources from '../views/Resources.vue'
import Res1 from '../views/Res1.vue'
import Res2 from '../views/Res2.vue'


import Onboarding from '../views/Onboarding.vue'
import Contacts from '../views/Contacts.vue'
import Finance from '../views/Finance.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },

    {
      path: '/training',
      name: 'Training',
      component: Training
    },

    {
      path: '/resources',
      name: 'Resources',
      component: Resources
    },

    {
      path: '/onboarding',
      name: 'Onboarding',
      component: Onboarding
    },

    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },

    {
      path: '/finance',
      name: 'Finance',
      component: Finance
    },

    {
      path: '/res1',
      name: 'Res1',
      component: Res1
    },

    {
      path: '/res2',
      name: 'Res2',
      component: Res2
    },
  
  ]
})

export default router
