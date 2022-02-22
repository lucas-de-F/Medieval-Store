import * as model from './model';
import * as token from '../middlewares/createToken';
import { IUser } from './IUser';

export const postUser = async (user: IUser): Promise<token.IToken> => {
  await model.postUser(user);

  return token.generateToken(user);
};

export const a = () => {};
