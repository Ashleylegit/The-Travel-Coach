import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedDestinations from '../../../components/FeaturedDestinations';
import Testimonials from '../components/Testimonials';
import CallToAction from '../../../components/CallToAction';
import Footer from '../components/Footer';
import '../styles/globals.css';
import '../components/HeroSection.css';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>The Travel Coach</title>
        <meta name="description" content="Expert travel advice and inspiration" />
      </Head>
      <HeroSection />
      <FeaturedDestinations />
    </div>
  );
};

export default HomePage;
