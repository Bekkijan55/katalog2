import axios from 'axios'
import { getToken } from './auth'
import store from '../store/store'
import AppConfig from "../vue.config";

// create an axios instance
const service = axios.create({
    baseURL: AppConfig.publicPath, // api base_url
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(config => {
    // Do something before request is sent
    if (store.getters.token) {
    // config.headers['X-Token'] = getToken() // Let each request carry token--['X-Token'] as a custom key. Please modify it according to the actual situation.
    config.headers['Authorization'] ='Bearer ' + getToken() // Let each request carry token--['X-Token'] as a custom key. Please modify it according to the actual situation.
}
return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})

// respone interceptor
service.interceptors.response.use(
    response => response,
    error => {
    console.log('err' + error) // for debug
    setTimeout(() => {
        // VueNotifications.error({ message: error.message });
}, 500)
    return Promise.reject(error)
})

export default service
