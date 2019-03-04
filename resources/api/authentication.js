import request from '../utils/request'
import { getToken } from '../utils/auth'

export function login(data) {
    return request({
        url: 'api/login',
        method: 'post',
        data
    })
}

export function logout() {
    return request({
        url: '/api/logout',
        headers: { 'Authorization': 'Bearer ' + getToken() },
        method: 'post'
    })
}