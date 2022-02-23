import * as model from './model';
import * as token from '../middlewares/createToken';
import { IUser } from './IUser';

interface Itoken {
  token: string,
}
export const postUser = async (user: IUser): Promise<Itoken> => {
  const { id, username } = await model.postUser(user);
  const payload = { id, username };

  return { token: token.generateToken(payload) };
};

export const a = () => {};
