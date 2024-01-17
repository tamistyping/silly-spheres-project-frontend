
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
import Vue3Cookies from 'vue3-cookies'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './assets/styles.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vue3GoogleLogin, { clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID }) // Will come from Google oAuth
app.use(Vue3Cookies, {
    expireTime: '1d',
    path: '/',
    domain: '',
    secure: true,
    sameSite: 'None'
})

app.mount('#app')
