import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import {Fancybox} from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import '@/styles/main.scss'
import {IMaskComponent} from "vue-imask";


Fancybox.bind('[data-fancybox]', {
  closeButton: false,
  dragToClose: false,
})

const app = createApp(App)

app.component('imask-input', IMaskComponent)
app.use(router)
app.mount("#app")
