import { IProduct } from "../models";

class SearchService {
  private filterByQuery(products, query): IProduct[] {
    return products.filter(this.matchesName(query));
  }

  private matchesName(query): (product: IProduct) => boolean {
    return ({ name }) => name.toLowerCase().includes(query.toLowerCase());
  }

  searchProducts(products, query): Promise<IProduct[]> {
    return Promise.resolve(this.filterByQuery(products, query));
  }
}

export default SearchService;
