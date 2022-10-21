import React from "react";
import LoginState from "./login.store";

class RootState {
  public loginState: LoginState
  constructor() {
    this.loginState = new LoginState()
  }
}

// 实例化
const rootState = new RootState()

// 创建上下文
const context = React.createContext(rootState)

// 导出上下文
const useStore = () => React.useContext(context)
export {
  useStore
}

