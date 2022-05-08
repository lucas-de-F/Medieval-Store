import TokenUtils from '../middlewares/createToken';
import { Itoken, IUser } from './IUser';
import UserModel from './model';

class UserServices {
  private model = UserModel;
  
  constructor() {
    this.postUser = this.postUser.bind(this);
  }

  async postUser(user: IUser): Promise<Itoken> {
    const { id, username } = await this.model.postUser(user);
    const payload = { id, username };
  
    return { token: TokenUtils.generateToken(payload) };
  }
}

export default (new UserServices());