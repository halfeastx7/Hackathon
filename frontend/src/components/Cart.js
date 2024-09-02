import React from 'react';
import './style/Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, setCart }) => {
    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            <div className="cart-items">
                {cart.map((item, index) => (
                    <div key={index} className="cart-item">
                        <img src={item.image} alt={item.title} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3>{item.title}</h3>
                            <p>${item.price.toFixed(2)}</p>
                        </div>
                        <button className="remove-button" onClick={() => removeFromCart(index)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
