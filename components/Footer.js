import styles from './Footer.module.css';
import { motion } from 'framer-motion';

const Footer = () => {
  -  //return <footer className={styles.footer}>...</footer>;
  +  return (
  +    <footer className={styles.footer}>
  +      <p>&copy; 2023 The Travel Coach</p>
  +      <ul>
  +        <li><Link href="/terms">Terms</Link></li>
  +        <li><Link href="/privacy">Privacy</Link></li>
  +      </ul>
  +    </footer>
  +  );
  };

export default Footer;