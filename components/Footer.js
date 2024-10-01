import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2023 The Travel Coach</p>
      <ul>
        <li><Link href="/terms">Terms</Link></li>
        <li><Link href="/privacy">Privacy</Link></li>
      </ul>
    </footer>
  );
};

export default Footer;