import React from 'react';
import ProductList from './ProductList';
import './style/Homepage.css';

const Homepage = ({ products, setCart, searchTerm }) => {
    const filteredProducts = products.filter(product =>
        product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="homepage">
            <div className="hero-section">
                <img
                    className="hero-image"
                    src="https://images.squarespace-cdn.com/content/v1/544deeb4e4b0023e704c7d5a/f5429e28-2b87-4903-a93d-5090501f2572/Brunello-Cucinelli-22+%281%29.jpg"
                    alt="Men's Fashion"
                />
                <div className="hero-text">
                    <h2>Exclusive Men's Collection</h2>
                    <p>Discover the latest in men's fashion. Up to 40% off on selected items!</p>
                </div>
            </div>

            <div className="hero-section">
                <img
                    className="hero-image"
                    src="https://www.demarco.pl/wp-content/uploads/2023/08/2.12.22-post-x3-Artboard25.jpg"
                    alt="Women's Fashion"
                />
                <div className="hero-text">
                    <h2>New Arrivals in Women's Fashion</h2>
                    <p>Check out the latest trends in women's wear with up to 50% off.</p>
                </div>
            </div>

            <div className="hero-section">
                <img
                    className="hero-image"
                    src="https://www.greenqueen.com.hk/wp-content/uploads/2021/10/Sustainable-Denim-Jeans-Made-From-Wild-Himalayan-Nettle.jpg"
                    alt="Denim Sale"
                />
                <div className="hero-text">
                    <h2>Denim Sale</h2>
                    <p>Upgrade your wardrobe with our exclusive denim sale. Don't miss out!</p>
                </div>
            </div>

            {/* Tambahkan ProductList di sini */}
            {searchTerm && (
                <div className="search-results">
                    <h2>Search Results</h2>
                    <div className="animated-products">
                        <ProductList products={filteredProducts} setCart={setCart} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Homepage;
