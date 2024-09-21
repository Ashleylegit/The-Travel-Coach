// pages/index.js
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Card from '../components/Card';
import Footer from '../components/Footer';

const HomePage = () => (
  <div>
    <Navbar />
    <HeroSection
      title="Welcome to The Travel Coach"
      subtitle="Your partner in travel"
      backgroundImage="/images/hero.jpg"
    />
    <Card
      title="Destination 1"
      description="Description 1"
      image="/images/destination1.jpg"
    />
    <Footer />
  </div>
);

export default HomePage;