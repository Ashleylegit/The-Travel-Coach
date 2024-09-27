import Link from 'next/link';
import { motion } from 'framer-motion';

function Button({ children, href }) {
  return (
    <><Link href={href}>
      <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {children}
      </a>
    </Link>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
        Click me!
      </motion.button></>
  );
}

export default Button;