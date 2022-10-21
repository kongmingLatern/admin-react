export const enum Status {
  SAVE_OK = 10011,//POST请求存储成功
  DELETE_OK = 10021,//DELETE请求删除成功
  UPDATE_OK = 10031,//PUT请求更新成功
  GET_OK = 10041,//Get请求查询成功
  SAVE_ERR = 10010,//POST请求存储失败
  DELETE_ERR = 10020,//DELETE请求删除失败
  UPDATE_ERR = 10030,//PUT请求更新失败
  GET_ERR = 10040,//Get请求查询失败
  SYSTEM_ERR = 30001,//系统错误
  BUSINESS_ERR = 30002,//业务错误
  TIME_OUT_ERR = 30002,//超时
  SYSTEM_UNKNOW_ERR = 39999,//未知错误
  LOGIN_OK = 10001,//登录成功
  LOGIN_ERR = 10000,//登录失败
  IS_AUTH = 10021,//登录成功是管理员
}