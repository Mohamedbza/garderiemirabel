import { motion } from 'framer-motion';
import Contact from '../sections/Contact';
import { pageVariants, pageTransition } from '../utils/animations';

const ContactPage = () => {
  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Contact />
    </motion.div>
  );
};

export default ContactPage;