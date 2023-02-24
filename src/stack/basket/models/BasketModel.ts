import deepCopy from 'utils/functions/deepCopy';
import ProductModel from 'stack/product/models/ProductModel';
import { Basket } from 'utils/types/basketTypes';
import ProductsCollectionModel from 'stack/product/models/ProductsCollectionModel';
import { Product } from 'utils/types/productTypes';

export const INIT_BASKET: Basket = {
    isInit: true,
    products: ProductsCollectionModel.init(),
    totalPrice: 0,
    len: 0,
};

const BasketModel = {
    init: () => {
        return { ...deepCopy(INIT_BASKET) };
    },

    fromFetched: (payload: Basket | null = null) => {
        if (!payload || Object.keys(payload).length <= 0)
            return { ...deepCopy(INIT_BASKET) };
        return {
            ...INIT_BASKET,
            isInit: false,
            products: payload.products.products.map((product) =>
                ProductModel.fromFetched(product)
            ),
        };
    },

    insertToCurrentBasket: ({
        currentBasket,
        newProduct = null,
    }: {
        currentBasket: Basket;
        newProduct: Product | null;
    }) => {
        if (!newProduct || Object.keys(newProduct).length <= 0)
            return currentBasket;
        const type = 'INSERT';
        return {
            ...deepCopy(currentBasket),
            totalPrice: currentBasket.totalPrice + newProduct.fields.price,
            len: currentBasket.len + 1,
            products: ProductsCollectionModel.updateCurrentProducts({
                currentProducts: currentBasket.products,
                handledProduct: newProduct,
                type: type,
            }),
        };
    },

    ejectFromCurrentBasket: ({
        currentBasket,
        ejectedProduct = null,
    }: {
        currentBasket: Basket;
        ejectedProduct: Product | null;
    }) => {
        if (!ejectedProduct || Object.keys(ejectedProduct).length <= 0)
            return currentBasket;
        const type = 'EJECT';
        return {
            ...deepCopy(currentBasket),
            totalPrice:
                currentBasket.totalPrice -
                ejectedProduct.fields.price * ejectedProduct.amount,
            len: currentBasket.len - ejectedProduct.amount,
            products: ProductsCollectionModel.updateCurrentProducts({
                currentProducts: currentBasket.products,
                handledProduct: ejectedProduct,
                type: type,
            }),
        };
    },

    clearCurrentBasket: () => {
        return BasketModel.init();
    },
};

export default BasketModel;
