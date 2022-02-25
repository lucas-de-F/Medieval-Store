export interface IProduct {
  name: string,
  amount: string,
  orderId?: number | null,
}

export interface Product extends IProduct {
  id: number
}
