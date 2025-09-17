import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-blue-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Company Info & Social */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="/logo.png"
                  alt="Garderie Mirabel Logo"
                  className="h-14 w-auto"
                />
                <h3 className="text-xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
                    Garderie Mirabel
                  </span>
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent font-extrabold">
                    {" "}1&2
                  </span>
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {t('footer.description')}
              </p>
            </div>

            {/* Social Media */}
            <div>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors shadow-md"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-colors shadow-md"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links & Contact */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">{t('footer.quickLinks')}</h4>
              <div className="grid grid-cols-2 gap-2">
                <Link to="/" onClick={scrollToTop} className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  {t('navigation.home')}
                </Link>
                <Link to="/about" onClick={scrollToTop} className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  {t('navigation.about')}
                </Link>
                <Link to="/programs" onClick={scrollToTop} className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  {t('navigation.programs')}
                </Link>
                <Link to="/gallery" onClick={scrollToTop} className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  {t('navigation.gallery')}
                </Link>
                <Link to="/blogs" onClick={scrollToTop} className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  {t('navigation.blogs')}
                </Link>
                <Link to="/contact" onClick={scrollToTop} className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  {t('navigation.contact')}
                </Link>
                <Link to="/faq" onClick={scrollToTop} className="text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  {t('navigation.faq')}
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">{t('footer.contactInfo')}</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">{t('footer.address')}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-blue-500 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">{t('navigation.phoneNumber')}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-blue-500 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">{t('footer.email')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">{t('footer.hours')}</h4>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <Clock size={16} className="text-blue-500 flex-shrink-0" />
                  <p className="text-gray-700 text-sm font-medium">{t('footer.weekdays')}</p>
                </div>
                <p className="text-gray-600 text-sm ml-7">{t('footer.weekdaysHours')}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-3 mb-2">
                  <Clock size={16} className="text-pink-500 flex-shrink-0" />
                  <p className="text-gray-700 text-sm font-medium">{t('footer.weekends')}</p>
                </div>
                <p className="text-gray-600 text-sm ml-7">{t('footer.weekendsHours')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm flex items-center">
              © 2024 Garderie Mirabel 1&2. {t('footer.allRightsReserved')}
            </p>
            <p className="text-gray-500 text-sm flex items-center">
              {t('footer.madeWith')} <Heart size={16} className="text-pink-500 mx-1" /> {t('footer.forChildren')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;