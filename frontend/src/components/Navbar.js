import React from 'react';
import { Link } from 'react-router-dom';
import './style/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ cart, setSearchTerm }) => {
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link className="navbar-brand" to="/">Everyday</Link>
                <div className="navbar-search">
                    <input
                        type="text"
                        placeholder="Search for products, brands and more"
                        onChange={handleSearchChange}
                    />
                    <button type="submit">Search</button>
                </div>
                <div className="navbar-links">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/collection">Our Collection</Link> {/* Pautan baru */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                <FontAwesomeIcon icon={faShoppingBag} className="cart-icon" />
                                <span className="cart-count">{cart.length}</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/checkout">Checkout</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
