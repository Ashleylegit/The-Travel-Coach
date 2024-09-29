import styles from './MainContent.module.css';
import { motion } from 'framer-motion';

const MainContent = ({ children }) => {
  return <main className={styles.main}>...</main>;
+  return (
+    <main className={styles.main}>
+      <section className={styles.hero}>
+        <h1>Welcome to The Travel Coach</h1>
+        <p>Plan your dream trip today!</p>
+      </section>
+      {children}
+    </main>
+  );
};

export default MainContent;