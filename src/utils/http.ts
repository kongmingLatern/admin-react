import axios from 'axios'
import { getToken } from './token'

const http = axios.create({
  // baseURL: '/api',
  timeout: 5000
})


http.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers!.Authorization = `Bearer ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})


http.interceptors.response.use((response) => {
  return response
}, (error) => {
  // 超出 2xx 范围的状态码都会触发该函数
  // 401 未授权
  if (error.response!.status === 401) {
    // 跳转到登录页
    // history.push('/login')
  }
  return Promise.reject(error)
})

export {
  http
}