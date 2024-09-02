import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Homepage from './components/Homepage';
import Collection from './components/Collection';
import './App.css';
import './components/style/Navbar.css';
import './components/style/Cart.css';
import './components/style/ProductList.css';
import './components/style/Checkout.css';
import './components/style/Homepage.css';
import './components/style/Collection.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get('http://localhost:5001/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar setSearchTerm={setSearchTerm} cart={cart} />
        <Routes>
          <Route path="/" element={<Homepage products={products} setCart={setCart} searchTerm={searchTerm} />} /> {/* Hantar props ke Homepage */}
          <Route path="/collection" element={<Collection products={products} setCart={setCart} searchTerm={searchTerm} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
