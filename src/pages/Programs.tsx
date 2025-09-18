import { motion } from 'framer-motion';
import Programmes from '../sections/Programmes';
import { pageVariants, pageTransition } from '../utils/animations';

const Programs = () => {
  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Programmes />
    </motion.div>
  );
};

export default Programs;