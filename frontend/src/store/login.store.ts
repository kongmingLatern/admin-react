import { LoginType } from './../type/index';
import { makeAutoObservable } from 'mobx';
import { http, setUid, getUid } from '../utils';
export default class LoginState {
  private uid: string = getUid() || ''
  constructor() {
    makeAutoObservable(this);
  }

  login = async ({ username, password }) => {
    // 调用登录接口
    const res: Record<string, any> = await http.get('/users/login', {
      params: { username, password }
    })


    if (res?.isAuth) {
      localStorage.setItem('isAuth', '1')
    }

    // 存入 token
    this.uid = res.data


    // 存入 ls
    setUid(this.uid)
  }
}

