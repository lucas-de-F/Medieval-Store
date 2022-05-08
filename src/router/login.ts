import { Router } from 'express';
// import rescue from 'express-rescue';

import ValidatePassword from '../login/loginUtils/validatePassword';
import ValidateUserName from '../login/loginUtils/validateUserName';
import LoginController from '../login/controller';

class LoginRouter {
  public router: Router;

  constructor() {
    this.router = Router();

    this.login();
  }

  private login() {
    this.router.post(
      '/',
      ValidatePassword.PasswordCheck,
      ValidateUserName.checkUserName,
      LoginController.login,
    );
  }
}

export default (new LoginRouter());
