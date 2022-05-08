import { Router } from 'express';
import rescue from 'express-rescue';
import postUsers from '../users/controller';

import {
  validateClass, validateLevel,
} from '../middlewares';
import ValidateUserName from '../login/loginUtils/validateUserName';
import ValidatePassword from '../login/loginUtils/validatePassword';

const users = Router();

users.post(
  '/',
  ValidateUserName.checkUserName,
  validateClass,
  validateLevel,
  ValidatePassword.PasswordCheck,
  rescue(postUsers),
);

export default users;
