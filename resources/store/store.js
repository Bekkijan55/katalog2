/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Version: 1.1
  Author: Pixinvent
  Author URL: hhttp://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'


import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

import user from './auth/index'

Vue.use(Vuex)
export const store = new Vuex.Store({
  modules: {
    user
  },
	getters,
	mutations,
	state,
	actions,
	strict: process.env.NODE_ENV !== 'production'
})

export default store