import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FoodCategories from '../components/FoodCategories';
import Cart from '../components/Cart';

const HomePage = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <Navbar setIsCartOpen={setIsCartOpen} />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <FoodCategories />
      </main>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default HomePage;