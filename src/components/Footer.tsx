import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-blue-50 to-pink-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold">
                <span className="text-pink-500">Garderie Mirabel</span>
                <span className="text-blue-500"> 1&2</span>
              </h3>
              <p className="text-gray-600 mt-2">
                {t('footer.description')}
              </p>
            </div>

            {/* Social Media */}
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

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={scrollToTop} className="text-gray-600 hover:text-pink-500 transition-colors">
                  {t('navigation.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="text-gray-600 hover:text-pink-500 transition-colors">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link to="/programs" onClick={scrollToTop} className="text-gray-600 hover:text-pink-500 transition-colors">
                  {t('navigation.programs')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" onClick={scrollToTop} className="text-gray-600 hover:text-pink-500 transition-colors">
                  {t('navigation.gallery')}
                </Link>
              </li>
              <li>
                <Link to="/blogs" onClick={scrollToTop} className="text-gray-600 hover:text-pink-500 transition-colors">
                  {t('navigation.blogs')}
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="text-gray-600 hover:text-pink-500 transition-colors">
                  {t('navigation.contact')}
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={scrollToTop} className="text-gray-600 hover:text-pink-500 transition-colors">
                  {t('navigation.faq')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">{t('footer.contactInfo')}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-500 mt-1" />
                <div>
                  <p className="text-gray-600 text-sm">{t('footer.address')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-500" />
                <p className="text-gray-600 text-sm">{t('navigation.phoneNumber')}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-500" />
                <p className="text-gray-600 text-sm">{t('footer.email')}</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">{t('footer.hours')}</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-blue-500" />
                <div>
                  <p className="text-gray-600 text-sm font-medium">{t('footer.weekdays')}</p>
                  <p className="text-gray-500 text-sm">{t('footer.weekdaysHours')}</p>
                </div>
              </div>
              <div className="ml-6">
                <p className="text-gray-600 text-sm font-medium">{t('footer.weekends')}</p>
                <p className="text-gray-500 text-sm">{t('footer.weekendsHours')}</p>
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