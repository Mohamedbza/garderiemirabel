import HeroSection from '../sections/HeroSection';
import AboutUs from '../sections/AboutUs';
import Services from '../sections/Services';
import PlacesAvailable from '../sections/PlacesAvailable';
import Testimonials from '../sections/testimonials';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Preview */}
      <AboutUs />

      {/* Services Preview */}
      <Services />

      {/* Places Available */}
      <PlacesAvailable />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};

export default Home;