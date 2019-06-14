/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

require('./bootstrap');

import Vue from 'vue'
import App from './App.vue'

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax
Vue.use(Vuesax)

// Vue Router
import router from './router'

import JsonExcel from 'vue-json-excel'

Vue.component('downloadExcel', JsonExcel)



// Theme Configurations
import '../../themeConfig.js'

import VueI18n from 'vue-i18n'

import messages from '../language'

// Globally Registered Components
import '../globalComponents.js'

// Styles: SCSS
import '@/assets/scss/main.scss'

// Tailwind
import '@/assets/css/main.css';



// Vuex Store
import store from '../store/store'

import './permission' // permission control

Vue.use(VueI18n)

router.beforeEach((to, from, next) => {
    if (store.getters.username === null) {
        next({
            path: '/login',
            query: {
                redirect: to.fullPath
            }
        })
    } else {
        next()
    }
})

const i18n = new VueI18n({
    locale: 'ru',
    messages,
})

// Feather font icon
require('@/assets/css/iconfont.css')

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app');
