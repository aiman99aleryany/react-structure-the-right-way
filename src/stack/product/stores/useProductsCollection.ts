import { create } from 'zustand';
import { ProductsCollection } from 'utils/types/productTypes';
import ProductsCollectionModel from '../models/ProductsCollectionModel';

const useProductsCollection = create((set) => ({
    productsCollection: ProductsCollectionModel.init(),
    updateProductsCollection: (newProductsCollection: ProductsCollection) => {
        return set(() => ({
            productsCollection: ProductsCollectionModel.fromFetched(
                newProductsCollection
            ),
        }));
    },
}));

export default useProductsCollection;
