import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import WuJieVue from 'wujie-vue3'
const app = createApp(App)

app.use(createPinia())
app.use(router).use(WuJieVue)

app.mount('#app')
