/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
  					path => router path
  					name => router name
  					component(lazy loading) => component to load
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Version: 1.1
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    base: process.env.BASE_URL,
    mode: 'history',
    routes: [

        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import('../layouts/main/Main.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/',
                    name: 'files',
                    component: () => import('../views/pages/catalogs/vedfiles')
                },
                {
                    path: '/ved-files/:id',
                    name: 'home',
                    component: () => import('../views/Home.vue'),
                },
                {
                    path: '/page2',
                    name: 'page2',
                    component: () => import('../views/Page2.vue'),
                },
                {
                    path: '/users/index',
                    name: 'users',
                    meta: {
                        breadcrumb: [{
                                title: 'Home',
                                url: '/'
                            },
                            {
                                title: 'Users',
                                active: true
                            },
                        ],
                        pageTitle: 'Users'
                    },
                    component: () => import('../views/pages/users/index')
                },


                {
                    path: '/users',
                    name: 'Users',
                    meta: {
                        breadcrumb: [{
                                title: "Home",
                                url: '/'
                            },
                            {
                                title: "User",
                                active: true
                            }
                        ],
                        pageTitle: 'User'
                    },
                    component: () => import('../views/pages/users/users')
                },
                {
                    path: '/vedomost/:id',
                    name: 'vedimost',
                    component: () => import('../views/pages/catalogs/vedimost')
                },
                {
                    path: '/all-passed',
                    name: 'allPassed',
                    component: () => import('../views/pages/catalogs/allpassed')
                },
                {
                    path: '/upload-excel',
                    name: 'uploadexcel',
                    component: () => import('../views/pages/catalogs/uploadexcel')
                }


            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/login',
                    name: 'pageLogin',
                    component: () => import('@/views/authentication/Login.vue')
                },
                /*{
                    path: '/register',
                    name: 'pageRegister',
                    component: () => import('@/views/authentication/Register.vue')
                },*/
                {
                    path: '/pages/error-404',
                    name: 'pageError404',
                    component: () => import('@/views/pages/errors/Error404.vue')
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})
