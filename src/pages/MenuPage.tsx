import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import { Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';

const menuItems = [
  {
    id: 1,
    name: 'Buddha Bowl',
    category: 'Salad',
    price: 24.30,
    rating: 4.7,
    time: '10-18 mins',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600&h=600'
  },
  {
    id: 2,
    name: 'Classic Burger',
    category: 'Burger',
    price: 18.90,
    rating: 4.5,
    time: '15-20 mins',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 3,
    name: 'Margherita Pizza',
    category: 'Pizza',
    price: 22.50,
    rating: 4.8,
    time: '20-25 mins',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 4,
    name: 'Chicken Salad',
    category: 'Salad',
    price: 16.90,
    rating: 4.6,
    time: '10-15 mins',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 5,
    name: 'Sushi Roll',
    category: 'Sushi',
    price: 28.90,
    rating: 4.9,
    time: '15-20 mins',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 6,
    name: 'Pasta Carbonara',
    category: 'Pasta',
    price: 19.90,
    rating: 4.7,
    time: '12-18 mins',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=300&h=300'
  }
];

const MenuPage = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <Navbar setIsCartOpen={setIsCartOpen} />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Our Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02]">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="ml-1">{item.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">${item.price.toFixed(2)}</span>
                  <button 
                    onClick={() => addToCart(item)}
                    className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default MenuPage;