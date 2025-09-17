import { Phone, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import i18n from '../i18n';
import { useState } from 'react';

const Navigation = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Helper function to check if link is active
    const isActive = (path: string) => {
        return location.pathname === path;
    };
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold">
                <span className="text-pink-500">Garderie Mirabel</span>
                <span className="text-blue-500"> 1&2</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`font-medium transition-colors ${isActive('/') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'}`}>
                {t('navigation.home')}
              </Link>
              <Link to="/about" className={`transition-colors ${isActive('/about') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'}`}>
                {t('navigation.about')}
              </Link>
              <Link to="/programs" className={`transition-colors ${isActive('/programs') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'}`}>
                {t('navigation.programs')}
              </Link>
              <Link to="/gallery" className={`transition-colors ${isActive('/gallery') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'}`}>
                {t('navigation.gallery')}
              </Link>
              <Link to="/blogs" className={`transition-colors ${isActive('/blogs') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'}`}>
                {t('navigation.blogs')}
              </Link>
              <Link to="/contact" className={`transition-colors ${isActive('/contact') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'}`}>
                {t('navigation.contact')}
              </Link>
            </div>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center text-blue-500">
                <Phone size={20} className="mr-2" />
                <div>
                  <p className="text-sm text-gray-600">{t('navigation.phoneText')}</p>
                  <p className="font-medium">{t('navigation.phoneNumber')}</p>
                </div>
              </div>
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
                <Link to="/" onClick={() => setIsMenuOpen(false)} className={`font-medium text-left transition-colors ${isActive('/') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'}`}>
                  {t('navigation.home')}
                </Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`text-left transition-colors ${isActive('/about') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'}`}>
                  {t('navigation.about')}
                </Link>
                <Link to="/programs" onClick={() => setIsMenuOpen(false)} className={`text-left transition-colors ${isActive('/programs') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'}`}>
                  {t('navigation.programs')}
                </Link>
                <Link to="/gallery" onClick={() => setIsMenuOpen(false)} className={`text-left transition-colors ${isActive('/gallery') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'}`}>
                  {t('navigation.gallery')}
                </Link>
                <Link to="/blogs" onClick={() => setIsMenuOpen(false)} className={`text-left transition-colors ${isActive('/blogs') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'}`}>
                  {t('navigation.blogs')}
                </Link>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={`text-left transition-colors ${isActive('/contact') ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'}`}>
                  {t('navigation.contact')}
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
  );
};

export default Navigation;
