import deepCopy from 'utils/functions/deepCopy';
import ProductModel from './ProductModel';
import { ProductsCollection } from 'utils/types/productTypes';
import { Product } from 'utils/types/productTypes';

export const INIT_PRODUCTS_COLLECTION: ProductsCollection = {
    isInit: true,
    products: [],
};

const ProductsCollectionModel = {
    init: () => {
        return { ...deepCopy(INIT_PRODUCTS_COLLECTION) };
    },

    fromFetched: (payload: ProductsCollection | null = null) => {
        if (!payload || Object.keys(payload).length <= 0)
            return { ...deepCopy(INIT_PRODUCTS_COLLECTION) };
        return {
            isInit: false,
            products: payload.products.map((product: Product) =>
                ProductModel.fromFetched(product)
            ),
        };
    },

    updateCurrentProducts: ({
        currentProducts,
        handledProduct,
        type,
    }: {
        currentProducts: ProductsCollection;
        handledProduct: Product;
        type: string;
    }) => {
        const matchings = currentProducts.products.filter(
            (product: Product) => product.fields.id === handledProduct.fields.id
        );

        if (type === 'INSERT') {
            if (matchings.length <= 0)
                return [
                    ...deepCopy(currentProducts),
                    ProductModel.updateCurrentAmount({
                        currentProduct: handledProduct,
                        type: type,
                    }),
                ];
            return currentProducts.products.map((product: Product) =>
                handledProduct.fields.id === product.fields.id
                    ? ProductModel.updateCurrentAmount({
                          currentProduct: product,
                          type: type,
                      })
                    : product
            );
        } else if (type === 'EJECT') {
            return currentProducts.products.filter(
                (product: Product) =>
                    handledProduct.fields.id !== product.fields.id
            );
        }
    },
};

export default ProductsCollectionModel;
