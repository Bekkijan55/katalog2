import router from './router'
import store from '../store/store'
import {
    getToken
} from '../utils/auth' // getToken from cookie


const whiteList = ['/login'] // no redirect whitelist

router.beforeEach((to, from, next) => {
    if (getToken()) { // determine if there has token
        if (to.path === '/login') {
            next({
                path: '/'
            })
        } else {
            store.dispatch('UserInfo').then(res => {
                next()
            }).catch(err => {
                store.dispatch('FedLogOut').then(() => {
                    next({
                        path: '/login'
                    })
                })
            })
        }
    } else {
        /* has no token*/
        if (whiteList.indexOf(to.path) !== -1) { // In the log-in white list, enter directly
            next()
        } else {
            next('/login') // Otherwise all redirect to login page
        }
    }
})
