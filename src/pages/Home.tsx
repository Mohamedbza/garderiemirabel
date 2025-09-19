import { motion } from 'framer-motion';
import HeroSection from '../sections/HeroSection';
import WhyChooseUs from '../sections/WhyChooseUs';
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

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Services Preview */}
      <Services /> 

      {/* Testimonials */}
      <Testimonials />
      
      <FAQ />
    </motion.div>
  );
};

export default Home;