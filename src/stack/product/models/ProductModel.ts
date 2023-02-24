import FieldsModel from './FieldsModel';
import deepCopy from 'utils/functions/deepCopy';
import { Product } from 'utils/types/productTypes';

export const INIT_PRODUCT: Product = {
    isInit: true,
    fields: FieldsModel.init(),
    amount: 0,
};

const ProductModel = {
    init: (): Product => {
        return { ...deepCopy(INIT_PRODUCT) };
    },

    fromFetched: (payload: Product | null = null): Product => {
        if (!payload || Object.keys(payload).length <= 0)
            return { ...deepCopy(INIT_PRODUCT) };
        return {
            ...deepCopy(INIT_PRODUCT),
            isInit: false,
            fields: { ...deepCopy(FieldsModel.fromFetched(payload.fields)) },
        };
    },

    updateCurrentAmount: ({
        currentProduct,
        type,
    }: {
        currentProduct: Product;
        type: string;
    }): Product | undefined => {
        if (type === 'INSERT') {
            return {
                ...deepCopy(currentProduct),
                amount: currentProduct.amount + 1,
            };
        } else if (type === 'EJECT') {
            return {
                ...deepCopy(currentProduct),
                amount: currentProduct.amount - 1,
            };
        }
    },
};

export default ProductModel;
