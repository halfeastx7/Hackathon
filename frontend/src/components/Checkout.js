import React from 'react';
import './style/Checkout.css';

const Checkout = ({ cart }) => {
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="checkout-container">
            <div className="checkout-summary">
                <h2>Order Summary</h2>
                <ul className="checkout-items">
                    {cart.map((item, index) => (
                        <li key={index} className="checkout-item">
                            <div className="item-details">
                                <span>{item.title}</span>
                                <span>${item.price.toFixed(2)}</span>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="checkout-total">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <button className="checkout-button">Proceed to Payment</button>
            </div>
        </div>
    );
};

export default Checkout;
