import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { Status } from './Status'
import { getUid } from './uid'

const http = axios.create({
  baseURL: 'http://localhost:8080',
  // baseURL: 'http://10.16.20.4:8080',
  timeout: 5000,
  withCredentials: true,
  headers: {
    post: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  },
})


http.interceptors.request.use((config) => {
  const uid = getUid()
  if (uid) {
    config.headers!.Authorization = `Bearer ${uid}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})


http.interceptors.response.use((response) => {
  const { code } = response.data
  if (!isSuccess(code)) {
    return Promise.reject(response.data)
  } else if (code === Status.IS_AUTH) {
    response.data = {
      ...response.data,
      isAuth: 1
    }
  }

  return response.data
}, (error) => {

  // 超出 2xx 范围的状态码都会触发该函数
  // 401 未授权
  if (error.response!.status === 401) {
    // 跳转到登录页
    // history.push('/login')
  }
  return Promise.reject(error)
})

function isSuccess(code) {
  return code === Status.SAVE_OK || code === Status.DELETE_OK || code === Status.UPDATE_OK || code === Status.GET_OK || code === Status.LOGIN_OK || code === Status.IS_AUTH
}

export {
  http
}