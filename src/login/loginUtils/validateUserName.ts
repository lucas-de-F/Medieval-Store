import { Request, Response, NextFunction } from 'express';
import { ParamError } from 'login/ILogin';
import ErrorClass from '../../middlewares/errorClass';

class ValidateUserName {
  private Error = ErrorClass;

  constructor() {
    this.checkUserName = this.checkUserName.bind(this);
  }

  checkUserName(req: Request, _res: Response, next: NextFunction): Response<ParamError> | void {
    const { username } = req.body;
    if (!username) throw new this.Error('Username is required', 400);
    if (typeof username !== 'string') throw new this.Error('Username must be a string', 422);
    if (username.length <= 2) {
      throw new this.Error('Username must be longer than 2 characters', 422);
    }
    return next();
  }
}

export default (new ValidateUserName());
