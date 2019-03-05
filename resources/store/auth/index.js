// authentication configs

import {getToken, setToken, removeToken} from '../../utils/auth'
import {login, logout, userInfo} from '../../api/authentication'

const user = {
    state: {
            username: '',
            email: '',
            token: getToken(),
        },
    getters: {
        token: state => {
            return state.token;
        },
        username: state => {
            return state.username;
        },
        email: state => {
            return state.email;
        }
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.username = name
        },
        SET_EMAIL: (state, email) => {
            state.email = email
        }
    },
    actions: {
        LoginUser({commit}, data) {
            return new Promise((resolve, reject) => {
                login(data).then(response => {
                    if(response.data.access_token) {
                      commit('SET_TOKEN', response.data.access_token)
                      setToken(response.data.access_token)
                    }else {
                      reject( response.data.error)
                    }

                    /*setTimeout(() => {
                        VueNotifications.success({message: 'Login success!'});
                    }, 1000)*/
                    resolve()
                }).catch(error => {
                  reject(error)
                })
            })
        },
      UserInfo({commit}) {
        userInfo().then(response => {
          commit('SET_NAME', response.data.data.name)
          commit('SET_EMAIL', response.data.data.email)
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