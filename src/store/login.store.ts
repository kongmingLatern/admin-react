import { makeObservable } from 'mobx';
import { http, setToken, getToken } from '../utils';
export default class LoginState {
  private token: string = getToken() || ''
  constructor() {
    makeObservable(this);
  }

  getToken = async (username: string, password: string) => {
    // 调用登录接口
    const res = await http.post('/login', { username, password })

    // 存入 token
    this.token = res.data.token

    // 存入 ls
    setToken(this.token)
  }
}

