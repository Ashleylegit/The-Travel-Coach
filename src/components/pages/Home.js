import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';
import '../components/HeroSection.css';

function HomePage() {
  return (
    <>
      <Head>
        <title>Home - The Travel Coach</title>
      </Head>
      <h1>Welcome to The Travel Coach</h1>
    </>
  );
}

export default HomePage;
