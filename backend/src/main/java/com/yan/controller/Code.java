package com.yan.controller;

public class Code {
    public static final Integer SAVE_OK = 10011;//POST请求存储成功
    public static final Integer DELETE_OK = 10021;//DELETE请求删除成功
    public static final Integer UPDATE_OK = 10031;//PUT请求更新成功
    public static final Integer GET_OK = 10041;//Get请求查询成功

    public static final Integer SAVE_ERR = 10010;//POST请求存储失败
    public static final Integer DELETE_ERR = 10020;//DELETE请求删除失败
    public static final Integer UPDATE_ERR = 10030;//PUT请求更新失败
    public static final Integer GET_ERR = 10040;//Get请求查询失败

    public static final Integer SYSTEM_ERR = 30001;//系统错误
    public static final Integer BUSINESS_ERR = 30002;//业务错误
    public static final Integer TIME_OUT_ERR = 30002;//超时
    public static final Integer SYSTEM_UNKNOW_ERR = 39999;//未知错误

    public static final Integer LOGIN_OK = 10001;//登录成功
    public static final Integer LOGIN_ERR = 10000;//登录失败
    public static final Integer IS_AUTH = 10021;//登录成功是管理员

}
