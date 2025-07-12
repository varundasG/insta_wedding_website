import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/insta_wedding.co/', '_blank');
  };

  const handlePhoneClick = () => {
    window.open('tel:902011770', '_self');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Instagram className="h-8 w-8 text-rose-400" />
            <span className="text-2xl font-serif text-gray-800">Insta Wedding</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-rose-500 border-b-2 border-rose-500'
                    : 'text-gray-700 hover:text-rose-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handlePhoneClick}
              className="flex items-center space-x-1 text-gray-700 hover:text-rose-500 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">Call Now</span>
            </button>
            <button
              onClick={handleInstagramClick}
              className="p-2 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-cream-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-rose-500 bg-rose-50'
                    : 'text-gray-700 hover:text-rose-500 hover:bg-rose-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2 flex items-center space-x-4">
              <button
                onClick={handlePhoneClick}
                className="flex items-center space-x-1 text-gray-700 hover:text-rose-500"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </button>
              <button
                onClick={handleInstagramClick}
                className="flex items-center space-x-1 text-gray-700 hover:text-rose-500"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;