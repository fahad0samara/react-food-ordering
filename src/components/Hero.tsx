import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Hero = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const featuredItem = {
    id: 1,
    name: 'Buddha Bowl',
    category: 'Salad',
    price: 24.30,
    rating: 4.7,
    time: '10-18 mins',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600&h=600'
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(featuredItem);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-12 gap-8">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Order your<br />
          <span className="text-gray-900">favourite Foods</span>
        </h1>
        <p className="text-gray-600 mb-8">
          Fresh and tasty food delivered to your doorstep. Explore our menu and enjoy delicious meals prepared just for you.
        </p>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border rounded-full overflow-hidden">
            <button 
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button 
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <button 
            className="flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Buy Now
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img 
          src={featuredItem.image}
          alt="Delicious Food" 
          className="rounded-3xl w-full h-auto object-cover shadow-xl"
        />
      </div>
    </div>
  );
};

export default Hero;