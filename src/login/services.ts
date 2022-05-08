import TokenUtils, { Payload } from '../middlewares/createToken';
import { ILogin } from './ILogin';
import ErrorClass from '../middlewares/errorClass';
import Model from './model';

class LoginServices {
  private model = Model;

  private tokenUtils = TokenUtils;

  private Error = ErrorClass;

  async validateLogin(login: ILogin) {
    const findUsername = await this.model.findUserName(login.username);
    if (findUsername.length === 0) {
      throw new this.Error('Username or password invalid', 422);
    }
    
    const verifyPassWord = await this.model.findPassWord(login.username, login.password);

    if (verifyPassWord.length === 0) {
      throw new this.Error('Username or password invalid', 401);
    }
    
    const { id, username }: Payload = verifyPassWord[0];

    const payload = { id, username };

    return { token: this.tokenUtils.generateToken(payload) };
  } 
}

export default (new LoginServices());