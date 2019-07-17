export interface IProducts {
  products: IProduct[];
}

export interface IProduct {
  product_id: string;
  name: string;
  price: number;
  image: string;
}

export interface IProductDetail {
  product_id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}
