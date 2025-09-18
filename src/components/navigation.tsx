import { Phone, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Helper function to check if link is active
    const isActive = (path: string) => {
        return location.pathname === path;
    };

    // Helper function to scroll to top when navigating
    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen(false);
    };
  return (
    <nav className="bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-5">
            {/* Luxury Logo Section */}
            <Link
              to="/"
              onClick={handleLinkClick}
              className="flex items-center space-x-4 group cursor-pointer"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <img
                  src="/logo.png"
                  alt="Garderie Mirabel Logo"
                  className="h-14 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="relative">
                <h1 className="text-2xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
                    Garderie Mirabel
                  </span>
                  <span className="bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-500 bg-clip-text text-transparent font-extrabold ml-1">
                    1&2
                  </span>
                </h1>
                <div className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-pink-500/30 via-transparent to-blue-500/30 rounded-full"></div>
              </div>
            </Link>

            {/* Luxury Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                onClick={handleLinkClick}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-xl group ${
                  isActive('/')
                    ? 'text-white bg-gradient-to-r from-pink-500 to-pink-600 shadow-lg shadow-pink-500/25'
                    : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50/50'
                }`}
              >
                <span className="relative z-10">{t('navigation.home')}</span>
                {!isActive('/') && <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/5 to-pink-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
              </Link>
              <Link
                to="/about"
                onClick={handleLinkClick}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-xl group ${
                  isActive('/about')
                    ? 'text-white bg-gradient-to-r from-pink-500 to-pink-600 shadow-lg shadow-pink-500/25'
                    : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50/50'
                }`}
              >
                <span className="relative z-10">{t('navigation.about')}</span>
                {!isActive('/about') && <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/5 to-pink-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
              </Link>
              <Link
                to="/programs"
                onClick={handleLinkClick}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-xl group ${
                  isActive('/programs')
                    ? 'text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                }`}
              >
                <span className="relative z-10">{t('navigation.programs')}</span>
                {!isActive('/programs') && <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
              </Link>
              <Link
                to="/gallery"
                onClick={handleLinkClick}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-xl group ${
                  isActive('/gallery')
                    ? 'text-white bg-gradient-to-r from-pink-500 to-pink-600 shadow-lg shadow-pink-500/25'
                    : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50/50'
                }`}
              >
                <span className="relative z-10">{t('navigation.gallery')}</span>
                {!isActive('/gallery') && <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/5 to-pink-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
              </Link>
              <Link
                to="/blogs"
                onClick={handleLinkClick}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-xl group ${
                  isActive('/blogs')
                    ? 'text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                }`}
              >
                <span className="relative z-10">{t('navigation.blogs')}</span>
                {!isActive('/blogs') && <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
              </Link>
              <Link
                to="/contact"
                onClick={handleLinkClick}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-xl group ${
                  isActive('/contact')
                    ? 'text-white bg-gradient-to-r from-pink-500 to-pink-600 shadow-lg shadow-pink-500/25'
                    : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50/50'
                }`}
              >
                <span className="relative z-10">{t('navigation.contact')}</span>
                {!isActive('/contact') && <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/5 to-pink-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>}
              </Link>
            </div>

            {/* Luxury Contact Info */}
            <div className="hidden lg:flex items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/50 backdrop-blur-sm border border-white/60 rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">{t('navigation.phoneText')}</p>
                      <p className="font-bold text-gray-800 text-sm">{t('navigation.phoneNumber')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Luxury Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-3 bg-white/50 backdrop-blur-sm border border-white/60 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/5 to-pink-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative text-gray-700 group-hover:text-pink-600 transition-colors">
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </div>
              </button>
            </div>
          </div>

          {/* Luxury Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gradient-to-r from-pink-500/20 via-transparent to-blue-500/20 backdrop-blur-xl">
              <div className="py-6 px-2">
                <div className="flex flex-col space-y-2">
                  <Link
                    to="/"
                    onClick={handleLinkClick}
                    className={`relative px-4 py-3 font-medium transition-all duration-300 rounded-xl ${
                      isActive('/')
                        ? 'text-white bg-gradient-to-r from-pink-500 to-pink-600 shadow-lg shadow-pink-500/25'
                        : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50/50'
                    }`}
                  >
                    {t('navigation.home')}
                  </Link>
                  <Link
                    to="/about"
                    onClick={handleLinkClick}
                    className={`relative px-4 py-3 font-medium transition-all duration-300 rounded-xl ${
                      isActive('/about')
                        ? 'text-white bg-gradient-to-r from-pink-500 to-pink-600 shadow-lg shadow-pink-500/25'
                        : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50/50'
                    }`}
                  >
                    {t('navigation.about')}
                  </Link>
                  <Link
                    to="/programs"
                    onClick={handleLinkClick}
                    className={`relative px-4 py-3 font-medium transition-all duration-300 rounded-xl ${
                      isActive('/programs')
                        ? 'text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                    }`}
                  >
                    {t('navigation.programs')}
                  </Link>
                  <Link
                    to="/gallery"
                    onClick={handleLinkClick}
                    className={`relative px-4 py-3 font-medium transition-all duration-300 rounded-xl ${
                      isActive('/gallery')
                        ? 'text-white bg-gradient-to-r from-pink-500 to-pink-600 shadow-lg shadow-pink-500/25'
                        : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50/50'
                    }`}
                  >
                    {t('navigation.gallery')}
                  </Link>
                  <Link
                    to="/blogs"
                    onClick={handleLinkClick}
                    className={`relative px-4 py-3 font-medium transition-all duration-300 rounded-xl ${
                      isActive('/blogs')
                        ? 'text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                    }`}
                  >
                    {t('navigation.blogs')}
                  </Link>
                  <Link
                    to="/contact"
                    onClick={handleLinkClick}
                    className={`relative px-4 py-3 font-medium transition-all duration-300 rounded-xl ${
                      isActive('/contact')
                        ? 'text-white bg-gradient-to-r from-pink-500 to-pink-600 shadow-lg shadow-pink-500/25'
                        : 'text-gray-700 hover:text-pink-600 hover:bg-pink-50/50'
                    }`}
                  >
                    {t('navigation.contact')}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
  );
};

export default Navigation;
