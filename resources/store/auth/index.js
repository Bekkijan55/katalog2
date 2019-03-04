// authentication configs

import {getToken, setToken, removeToken} from '../../utils/auth'
import {login, logout} from '../../api/authentication'

const user = {
    state: {
            userName: '',
            email: '',
            token: getToken(),
        },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_EMAIL: (state, email) => {
            state:email = email
        }
    },
    actions: {
        LoginUser({commit}, data) {
            return new Promise((resolve, reject) => {
                login(data).then(response => {
                    commit('SET_TOKEN', response.data.authorization)
                    setToken(response.data.authorization)
                    /*setTimeout(() => {
                        VueNotifications.success({message: 'Login success!'});
                    }, 1000)*/
                    resolve()
                })
            }).catch(error => {
                reject(error)
            })
        },
      FedLogOut({commit}) {
          commit('SET_TOKEN', '')
          commit('SET_NAME', '')
          commit('SET_EMAIL', '')
            removeToken()
      },
    }
}

export default user