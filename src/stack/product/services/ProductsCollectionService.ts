import deepCopy from 'utils/functions/deepCopy';
import { ProductsCollection } from 'utils/types/productTypes';
import productsMock from 'utils/mocks/productsMock';

const ProductsCollectionService = {
    getAll: (): ProductsCollection => {
        return { ...deepCopy(productsMock) };
    },

    getOneById: () => {},
};

export default ProductsCollectionService;
