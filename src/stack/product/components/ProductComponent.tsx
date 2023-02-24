import { Product } from 'utils/types/productTypes';

function ProductComponent({ product }: { product: Product }) {
    return (
        <div className="productComponent">
            <h1>{product.fields.id}</h1>
            <p>{product.fields.rating}</p>
            <p>{product.fields.price}</p>
        </div>
    );
}

export default ProductComponent;
