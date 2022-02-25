import { Request, Response } from 'express';
import { IUser } from './IUser';

import * as service from './service';

const postUsers = async (req: Request, res: Response): Promise<void> => {
  const user: IUser = req.body;
  const post = await service.postUser(user);

  res.status(201).json(post);
};

export default postUsers;
