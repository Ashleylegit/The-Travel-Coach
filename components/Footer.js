import styles from './Footer.module.css';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; 2023 The Travel Coach</p>
    </footer>
  );
};

export default Footer;