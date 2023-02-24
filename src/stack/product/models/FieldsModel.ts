import deepCopy from 'utils/functions/deepCopy';
import { Fields } from 'utils/types/productTypes';

export const INIT_FIELDS: Fields = {
    isInit: true,
    id: '',
    title: '',
    image: '',
    price: 0,
    rating: 0,
};

const FieldsModel = {
    init: (): Fields => {
        return { ...deepCopy(INIT_FIELDS) };
    },
    fromFetched: (payload: Fields | null = null): Fields => {
        if (!payload || Object.keys(payload).length <= 0)
            return { ...deepCopy(INIT_FIELDS) };
        return {
            isInit: false,
            id: payload.id ?? INIT_FIELDS.id,
            title: payload.title ?? INIT_FIELDS.title,
            image: payload.image ?? INIT_FIELDS.image,
            price: payload.price ?? INIT_FIELDS.price,
            rating: payload.rating ?? INIT_FIELDS.rating,
        };
    },
};

export default FieldsModel;
