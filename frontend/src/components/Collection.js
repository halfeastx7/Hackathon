import React from 'react';
import ProductList from './ProductList';
import './style/Collection.css';

const Collection = ({ products, setCart, searchTerm }) => {
    const filteredProducts = products.filter(product =>
        product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="collection-page">
            <h2>Our Collection</h2>
            <ProductList products={filteredProducts} setCart={setCart} />
        </div>
    );
};

export default Collection;
