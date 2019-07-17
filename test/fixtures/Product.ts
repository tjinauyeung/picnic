import Chance from "chance";
import { IProduct } from "../../src/models";

const chance = new Chance();

export function makeProduct(): IProduct {
  return {
    product_id: chance.guid(),
    name: chance.animal(),
    image: chance.avatar(),
    price: chance.integer()
  };
}

export function makeProducts(amount: number = 10): IProduct[] {
  return Array.from({ length: amount }).map(() => makeProduct());
}
