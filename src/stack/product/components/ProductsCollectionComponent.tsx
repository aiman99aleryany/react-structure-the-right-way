import { useLoaderData } from 'react-router-dom';
import { ProductsCollection } from 'utils/types/productTypes';
import ProductComponent from './ProductComponent';

function ProductsCollectionComponent() {
    const products: ProductsCollection = useLoaderData() as ProductsCollection;

    return (
        <div>
            {products.products.map((product) => (
                <ProductComponent product={product} />
            ))}
        </div>
    );
}

export default ProductsCollectionComponent;
