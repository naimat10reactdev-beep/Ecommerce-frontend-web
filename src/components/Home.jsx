import React, { useState } from 'react';

import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Hero from './Hero';
import ProductsData from './ProductsData';
import ProductCardsSection from './ProductCardsSection';
import Testimonials from './Testimonials';

const Home = () => {

  const [cart, setCart] = useState([]);


  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div>

      <Navbar cart={cart} removeFromCart={removeFromCart} />

      <Navbar2 />
      <Hero />
      <ProductsData />

      <ProductCardsSection addToCart={addToCart} />

      <Testimonials />

    </div>
  );
};

export default Home;