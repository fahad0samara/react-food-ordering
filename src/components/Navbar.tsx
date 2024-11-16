import React from 'react';
import { ShoppingCart, Search, LogIn, UserCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

interface NavbarProps {
  setIsCartOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setIsCartOpen }) => {
  const { cartItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-500">foco</Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link to="/" className="text-gray-900 hover:text-orange-500">Home</Link>
              <Link to="/menu" className="text-gray-900 hover:text-orange-500">Menu</Link>
              <a href="#" className="text-gray-900 hover:text-orange-500">Service</a>
              <a href="#" className="text-gray-900 hover:text-orange-500">Shop</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="p-2 hover:bg-gray-100 rounded-full relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-900">{user.name}</span>
                <button
                  onClick={logout}
                  className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => navigate('/register')}
                  className="flex items-center px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800"
                >
                  <UserCircle2 className="w-5 h-5 mr-2" />
                  <span>Sign Up</span>
                </button>
                <button
                  onClick={() => navigate('/login')}
                  className="flex items-center px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
                >
                  <LogIn className="w-5 h-5 mr-2" />
                  <span>Login</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;