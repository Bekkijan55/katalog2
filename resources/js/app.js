
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

// Theme Configurations
import '../../themeConfig.js'

// Globally Registered Components
import '../globalComponents.js'

// Styles: SCSS
import '@/assets/scss/main.scss'

// Tailwind
import '@/assets/css/main.css';

// Vue Router
import router from './router'

// Vuex Store
import store from '../store/store'

import './permission' // permission control

// Feather font icon
require('@/assets/css/iconfont.css')

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')