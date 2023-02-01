import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import i18n from './i18n';



// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import '@mdi/font/css/materialdesignicons.css'


const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .use(i18n)
  .mount('#app')
