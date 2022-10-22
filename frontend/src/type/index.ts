
export interface UserType {
  uid: string
  key: string
  name: string
  tel: string
  address: string
  balance: string
}
export interface GoodsType {
  gid: string
  key?: string
  gname: string
  type: string
  imgs: string[]
  desc: string
  goodcount: number
  price: number
}
export interface OrderType {
  oid: string
  uid: string
  gid: string
  otime: number
  isFinish: number
}

export interface LoginType {
  username: string
  password: string
  isAuth?: number
}