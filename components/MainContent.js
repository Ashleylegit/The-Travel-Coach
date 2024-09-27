import styles from './MainContent.module.css';
import { motion } from 'framer-motion';

const MainContent = ({ children }) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  );
};

export default MainContent;