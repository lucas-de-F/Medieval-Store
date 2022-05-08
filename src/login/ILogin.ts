export interface ILogin {
  username: string,
  password: string,
}

export interface ParamError {
  error: string,
}
export interface Login extends ILogin {
  id: number
}
