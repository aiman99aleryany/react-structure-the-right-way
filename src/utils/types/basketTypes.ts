import { ProductsCollection } from './productTypes';

export type Basket = {
    isInit: boolean;
    products: ProductsCollection;
    totalPrice: number;
    len: number;
};
