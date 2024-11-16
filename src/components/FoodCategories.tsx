import React from 'react';
import { Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';

const foods = [
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
  }
];

const FoodCard = ({ food }: { food: typeof foods[0] }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02]">
      <div className="relative">
        <img 
          src={food.image} 
          alt={food.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{food.time}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">{food.name}</h3>
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1">{food.rating}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold">${food.price.toFixed(2)}</span>
          <button 
            onClick={() => addToCart(food)}
            className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const FoodCategories = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default FoodCategories;