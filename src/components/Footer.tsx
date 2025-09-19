import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-100">
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
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('footer.description')}
              </p>

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
          </div>

          {/* Navigation & Useful Links */}
          <div className="grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">{t('footer.quickLinks')}</h4>
              <div className="space-y-2">
                <Link to="/" onClick={scrollToTop} className="block text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  {t('navigation.home')}
                </Link>
                <Link to="/about" onClick={scrollToTop} className="block text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  {t('navigation.about')}
                </Link>
                <Link to="/programs" onClick={scrollToTop} className="block text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  {t('navigation.programs')}
                </Link>
                <Link to="/gallery" onClick={scrollToTop} className="block text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  {t('navigation.gallery')}
                </Link>
                <Link to="/blogs" onClick={scrollToTop} className="block text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  {t('navigation.blogs')}
                </Link>
                <Link to="/contact" onClick={scrollToTop} className="block text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  {t('navigation.contact')}
                </Link>
                <Link to="/faq" onClick={scrollToTop} className="block text-gray-600 hover:text-pink-500 transition-colors text-sm">
                  {t('navigation.faq')}
                </Link>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">{t('footer.usefulLinks')}</h4>
              <div className="space-y-2">
                <a
                  href="https://www.finances.gouv.qc.ca/ministere/outils_services/outils_calcul/cout_garde_quotidien/outil_garde.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-pink-500 transition-colors text-sm"
                >
                  {t('footer.links.costCalculator')}
                </a>
                <a
                  href="https://www.rrq.gouv.qc.ca/fr/enfants/naissance_adoption/soutien_enfants/Pages/soutien_enfants.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-pink-500 transition-colors text-sm"
                >
                  {t('footer.links.familyAllowances')}
                </a>
                <a
                  href="https://naitreetgrandir.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-pink-500 transition-colors text-sm"
                >
                  {t('footer.links.naitreEtGrandir')}
                </a>
                <a
                  href="https://www.quebec.ca/sante/conseils-et-prevention/vaccination-et-maladies-infectieuses/vaccination/calendrier-de-vaccination"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-600 hover:text-pink-500 transition-colors text-sm"
                >
                  {t('footer.links.vaccinationSchedule')}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">{t('footer.contactInfo')}</h4>
            <div className="space-y-4">
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
      </div>
    </footer>
  );
};

export default Footer;