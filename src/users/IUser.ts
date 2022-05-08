export interface IUser {
  username: string,
  classe: string,
  level: number,
  password: string,
}

export interface Itoken {
  token: string,
}
export interface User extends IUser {
  id: number
}
