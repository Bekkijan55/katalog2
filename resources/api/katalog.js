import request from '../utils/request'

export function getVedmosts(id) {
    return request({
        url: '/api/get-vedmost/' + id,
        method: 'get'
    })
}

export function findFromKatalog(data) {
    return request({
        url: '/api/find-katalog',
        method: 'get',
        params: data
    })
}

export function clickPassed(data) {
    return request({
        url: '/api/click-passed',
        method: 'post',
        data
    })
}

export function getAllPassed() {
    return request({
        url: '/api/get-all-passed',
        method: 'get',
    })
}

export function getFiles() {
    return request({
        url: '/api/get-files',
        method: 'get'
    })
}

export function sendExcel(data) {
    return request({
        url: '/api/get-excel',
        method: 'post',
        data
    })
}
