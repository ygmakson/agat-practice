import { createRouter, createWebHistory } from 'vue-router'
import CatalogueView from "@/views/CatalogueView.vue"
import MainView from "@/views/MainView.vue";


const routes = [
  { path: '/', component: MainView },
  { path: '/catalogue', component: CatalogueView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router