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

export function getFiles(id) {
    return request({
        url: '/api/get-files/' + id,
        method: 'get',

    })
}

export function sendExcel(data) {
    return request({
        url: '/api/get-excel',
        method: 'post',
        data
    })
}

export function addVedFile(data) {
    return request({
        url: '/api/add-ved-fie',
        method: 'post',
        data
    })
}

export function getVedFiles() {
    return request({
        url: '/api/get-ved-files',
        method: 'get'
    })
}
