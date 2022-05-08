import { Request, Response } from 'express';
import { IUser } from './IUser';
import UserServices from './service';

class UserController {
  private services = UserServices;

  constructor() {
    this.postUsers = this.postUsers.bind(this);
  }

  async postUsers(req: Request, res: Response): Promise<any> {
    const user: IUser = req.body;
    const post = await this.services.postUser(user);
    
    return res.status(201).json(post);
  }
}

export default (new UserController());