import request from '../utils/request'

export function getUsers(query) {
  return request({
    url: '/api/users',
    method: 'get',
    params: query
  })
}

export function getUserId(id) {
  return request({
    url: '/api/users/' + id ,
    method: 'get'
  })
}
/*export function deleteUser(id) {
  return request({
    url: '/api/users/' + id,
    method: 'delete'
  })
}*/

export function createUser(data) {
  return request({
    url: '/api/users',
    method: 'post',
    data
  })
}

export function updateUser(data, id) {
  return request({
    url: '/api/users/'+id,
    method: 'put',
    data
  })
}

export function getRole(query) {
  return request({
    url: '/api/roles',
    method: 'get',
    params: query
  })
}