import React from 'react';
import './style/ProductList.css';

const ProductList = ({ products, setCart }) => {
    const handleAddToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    return (
        <div className="product-list">
            <h2>Products</h2>
            <div className="products">
                {products.map(product => (
                    <div key={product._id} className="product-card">
                        <img src={product.imageUrl} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
