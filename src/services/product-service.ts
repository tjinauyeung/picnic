import RequestService from "./request-service";
import { IProductDetail, IProduct } from "../models";

const ENDPOINTS = {
  product: id => `https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/${id}/detail`,
  products: () => `https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list`
};

interface ProductServiceOptions {
  request?: RequestService;
}

class ProductService {
  request: RequestService;

  constructor(options: ProductServiceOptions = {}) {
    this.request = options.request || new RequestService();
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts(): Promise<IProduct[]> {
    return this.request.get(ENDPOINTS.products()).then(data => data.products);
  }

  getProduct(id: number): Promise<IProductDetail> {
    return this.request.get(ENDPOINTS.product(id));
  }
}

export default ProductService;
