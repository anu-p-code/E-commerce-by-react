import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContextProvider'; // Ensure correct import path
import { useParams } from 'react-router-dom';
import Breadcrum from '../Breadcrums/Breadcrum'; // Ensure correct import path
import ProductDisplay from '../ProductDisplay/ProductDisplay'; // Ensure correct import path
import DescriptionBox from '../DescriptionBox/DescriptionBox'; // Ensure correct import path
import RelatedProduct from '../RelatedProducts/RelatedProduct'; // Ensure correct import path

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((e) => e.id === Number(productId));

    return (
        <div>
            {product ? (
                <>
                    <Breadcrum product={product} />
                    <ProductDisplay product={product} />
                    <DescriptionBox />
                    <RelatedProduct />
                </>
            ) : (
                <p>Product not found</p> // Handle case where product is not found
            )}
        </div>
    );
}

export default Product;
