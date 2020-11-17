export interface IRegister {
  email: string;
  nickName: string;
}
export interface ILogin {
  user: {
    email: string;
    nickName: string;
  };

  token: string;
}
