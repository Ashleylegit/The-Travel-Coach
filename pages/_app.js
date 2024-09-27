// pages/_app.js
import Head from 'next/head';
import Header from '../components/Navbar';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import MainContent from '../components/MainContent';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>The Travel Coach</title>
        <meta name="description" content="Travel coaching services" />
        <meta name="keywords" content="travel, coaching, adventure" />
      </Head>
      <Header />
      <Navigation />
      <MainContent>
        <Component {...pageProps} />
      </MainContent>
      <Footer />
    </div>
  );
}

export default MyApp;