import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import {Fancybox} from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import '@/styles/main.scss'


Fancybox.bind('[data-fancybox]', {
  closeButton: false,
  dragToClose: false,
})


createApp(App).use(router).mount('#app')
