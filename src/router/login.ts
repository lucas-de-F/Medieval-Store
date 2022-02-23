import { Router } from 'express';
// import rescue from 'express-rescue';

import {
  validateLogin, validateName, validatePassword,
} from '../middlewares';

const login = Router();

login.post(
  '/',
  validateName,
  validatePassword,
  validateLogin,
);

export default login;
