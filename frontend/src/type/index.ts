
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
  gname?: string
  gName?: string
  type: string
  imgs: string
  desc: string
  goodCount: number
  price: number
}
export interface OrderType {
  oid: string
  uid: string
  gid: string
  oTime: string
  isFinish: number
}

export interface LoginType {
  username: string
  password: string
  isAuth?: number
}