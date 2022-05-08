import { Router } from 'express';
import rescue from 'express-rescue';
import postUsers from '../users/controller';
import { validateClass, validateLevel } from '../middlewares';
import ValidateUserName from '../login/loginUtils/validateUserName';
import ValidatePassword from '../login/loginUtils/validatePassword';

class UserRouter {
  public router: Router; 

  constructor() {
    this.router = Router();
    this.PostUser();
  }

  PostUser() {
    this.router.post(
      '/',
      ValidateUserName.checkUserName,
      validateClass,
      validateLevel,
      ValidatePassword.PasswordCheck,
      rescue(postUsers.postUsers),
    );
  } 
}

export default (new UserRouter());
