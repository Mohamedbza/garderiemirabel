import { Phone, Menu, X } from 'lucide-react';
import i18n from '../i18n';
import { useState } from 'react';
const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-3xl font-bold">
                <span className="text-pink-500">Baby</span>
                <span className="text-blue-500">Care</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-pink-500 font-medium hover:text-pink-600 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Services</a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Programs</a>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Events</a>
              <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors flex items-center">
                  Pages
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
              <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Contact</a>
            </div>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center text-blue-500">
                <Phone size={20} className="mr-2" />
                <div>
                  <p className="text-sm text-gray-600">Have any questions?</p>
                  <p className="font-medium">call us: +145 043 89696</p>
                </div>
              </div>
              {/* Language Switcher */}
              <select
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                defaultValue={i18n.language}
                className="bg-pink-500 text-gray-800 border border-white rounded px-2 py-1 text-xs cursor-pointer focus:outline-none"
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-pink-500 font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">About</a>
                <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Services</a>
                <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Programs</a>
                <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Events</a>
                <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Pages</a>
                <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>
  );
};

export default Navigation;
