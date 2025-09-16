import './i18n';
import HeroSection from './sections/HeroSection';
import Navigation from './components/navigation';
import AboutUs from './sections/AboutUs';
import Services from './sections/Services';
import Programmes from './sections/Programmes';
import PlacesAvailable from './sections/PlacesAvailable';
import Testimonials from './sections/testimonials';

const App = () => {

  return (
    <div className="min-h-screen bg-white">
      

      {/* Navigation */}
      <Navigation />
      {/* Hero Section */}
      <HeroSection /> 
      {/* About Us */}
      <AboutUs /> 
      {/* Services */}
      <Services /> 
      {/* Programmes */}
      <Programmes /> 
      {/* PlacesAvailable */}
      <PlacesAvailable /> 
      {/* Testimonials */}
      <Testimonials /> 
    </div>
  );
};

export default App;