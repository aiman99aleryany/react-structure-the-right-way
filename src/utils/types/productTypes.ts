export type Fields = {
    isInit: boolean;
    id: string;
    title: string;
    image: string;
    price: number;
    rating: number;
};

export type Product = {
    isInit: boolean;
    fields: Fields;
    amount: number;
};

export type ProductsCollection = {
    isInit: boolean;
    products: Product[];
};
