import { Response } from 'express';
import * as service from './service';
import { NewRequest } from '../middlewares/validateToken';
import { Payload } from '../middlewares/createToken';

const PostOrder = async (req: NewRequest, res: Response): Promise<void> => {
  try {
    const { products }: { products: number[] } = req.body;
    const { id: userId } = req.payload as Payload;
        
    const postOrder = await service.PostOrder(products, userId);
        
    res.status(201).json(postOrder);
  } catch (e) {
    console.log(e);
  }
};

export default PostOrder;