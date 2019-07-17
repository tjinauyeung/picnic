import RequestService from "./request-service";
import { ProductDetail, Product } from "../models";

const ENDPOINTS = {
  products: () => `https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/list`,
  product: id => `https://s3-eu-west-1.amazonaws.com/developer-application-test/cart/${id}/detail`
};

interface ProductServiceOptions {
  request?: RequestService;
}

class ProductService {
  request: RequestService;

  constructor(options: ProductServiceOptions = {}) {
    this.request = options.request || new RequestService();
  }

  getProducts(): Promise<Product[]> {
    return this.request.get(ENDPOINTS.products()).then(data => data.products);
  }

  getProduct(id: number): Promise<ProductDetail> {
    return this.request.get(ENDPOINTS.product(id));
  }
}

export default ProductService;
