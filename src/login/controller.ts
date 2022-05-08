import { Request, Response } from 'express';
import Services from './services';

class LoginController {
  private service = Services;

  login = (req: Request, res: Response) => {
    const login = req.body;
    const result = this.service.validateLogin(login);

    res.status(200).json(result);
  }; 
}

export default (new LoginController());