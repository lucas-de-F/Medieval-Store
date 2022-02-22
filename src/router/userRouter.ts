import { Router } from 'express';
import rescue from 'express-rescue';
import postUsers from '../users/controller';

import {
  validateClass, validateName, validateLevel, validatePassword,
} from '../middlewares';

const users = Router();

users.post(
  '/',
  validateName,
  validateClass,
  validateLevel,
  validatePassword,
  rescue(postUsers),
);

export default users;
