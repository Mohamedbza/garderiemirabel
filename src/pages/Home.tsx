import { motion } from 'framer-motion';
import HeroSection from '../sections/HeroSection';
import AboutUs from '../sections/AboutUs';
import Services from '../sections/Services'; 
import Testimonials from '../sections/testimonials';
import FAQ from './FAQ';
import { pageVariants, pageTransition } from '../utils/animations';

const Home = () => {
  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Preview */}
      <AboutUs />

      {/* Services Preview */}
      <Services /> 

      {/* Testimonials */}
      <Testimonials />
      
      <FAQ />
    </motion.div>
  );
};

export default Home;