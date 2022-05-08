import { Response, Request, NextFunction } from 'express';
import { ParamError } from 'login/ILogin';
import ErrorClass from '../../middlewares/errorClass';

class ValidatePassword {
  public Err = ErrorClass;

  constructor() {
    this.PasswordCheck = this.PasswordCheck.bind(this);
  }

  PasswordCheck(req: Request, _res: Response, next: NextFunction): Response<ParamError> | void {
    const { password } = req.body;

    if (!password) throw new this.Err('Password is required', 400);

    if (typeof password !== 'string') throw new this.Err('Password must be a string', 422);

    if (password.length < 7) {
      throw new this.Err('Password must be longer than or equal to 7 characters', 422);
    }
    next();
  }
}

export default (new ValidatePassword());
