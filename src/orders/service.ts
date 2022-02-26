import * as model from './model';

export const PostOrder = async (products: number[], userId: number) => {
  const orderId = await model.InsertOrder(userId);
  await model.PostOrder(orderId, products);
  return { 
    order: {
      userId,
      products, 
    },
  };
};

export const a = 'a';