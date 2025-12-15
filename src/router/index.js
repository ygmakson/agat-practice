import { createRouter, createWebHistory } from 'vue-router'
import CatalogueView from "@/views/CatalogueView.vue"
import CarDetail from "@/views/CataloqueDetail.vue"
import MainView from "@/views/MainView.vue";


const routes = [
  {
    path: '/',
    component: MainView
  },
  {
    path: '/catalogue',
    component: CatalogueView
  },
  {
    path: '/catalogue/:id',
    component: CarDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router