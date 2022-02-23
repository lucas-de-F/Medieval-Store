import { Request, Response } from 'express';
import * as token from './createToken';
import * as model from '../login/model';
import { ILogin } from '../login/ILogin';

type Payload = {
  id: number;
  username: string;
};
  
export const validateLogin = async (
  req: Request,
  res: Response,
) => {
  const login: ILogin = req.body;
  const findUsername = await model.findUserName(login.username);
  if (findUsername.length === 0) {
    return res.status(400).json({ error: 'Username or password invalid' });
  }
  const verifyPassWord = await model.findPassWord(login.username, login.password);
  if (verifyPassWord.length === 0) {
    return res.status(400).json({ error: 'Username or password invalid' });
  }
  console.log(verifyPassWord);

  const { id, username }: Payload = verifyPassWord[0];
  const payload = { id, username };
  return res.status(200).json({ token: token.generateToken(payload) });
};

export const a = () => {};
