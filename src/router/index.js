import { createRouter, createWebHistory } from 'vue-router'
import CatalogueVue from "@/views/CatalogueView.vue"


const routes = [
  { path: '/', component: CatalogueVue },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router