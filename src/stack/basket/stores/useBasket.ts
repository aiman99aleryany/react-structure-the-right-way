import { Basket } from 'utils/types/basketTypes';
import { create } from 'zustand';
import BasketModel from '../models/BasketModel';

const useBasket = create((set) => ({
    basket: BasketModel.init(),

    updateBasket: (newBasket: Basket) => {
        return set(() => ({
            basket: BasketModel.fromFetched(newBasket),
        }));
    },
}));

export default useBasket;
