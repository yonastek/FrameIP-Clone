import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'index',
    component: () => import('../components/admin/index.vue'),
    children:[
     
    ]
  },
   {
        path: '/category',
        name: 'category',
        component: () => import('../components/admin/shared/Categories.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('../components/admin/shared/Footer.vue')
      },
      {
        path: '/societe',
        name: 'societe',
        component: () => import('../components/admin/shared/Societe.vue')
      },
      {
        path: '/reference',
        name: 'reference',
        component: () => import('../components/admin/shared/Reference.vue')
      },
      {
        path: '/competence',
        name: 'competence',
        component: () => import('../components/admin/shared/Competence.vue')
      },
      {
        path: '/service',
        name: 'service',
        component: () => import('../components/admin/shared/Service.vue')
      },
      {
        path: '/recrutement',
        name: 'recrutement',
        component: () => import('../components/admin/shared/Recrutement.vue')
      },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
