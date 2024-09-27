import { motion } from 'framer-motion';

const AnimatedButton = () => {
  return (
    <motion.button
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      Click me!
    </motion.button>
  );
};

export default AnimatedButton;