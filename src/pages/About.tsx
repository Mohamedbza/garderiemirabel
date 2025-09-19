import { motion } from 'framer-motion';
import AboutUs from '../sections/AboutUs';
import OurStory from '../sections/OurStory';
import OurTeam from '../sections/OurTeam';
import OurPhilosophy from '../sections/OurPhilosophy';
import { pageVariants, pageTransition } from '../utils/animations';

const About = () => {
  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <AboutUs />
      <OurStory />
      <OurTeam />
      <OurPhilosophy />
    </motion.div>
  );
};

export default About;