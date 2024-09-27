import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="hero">
      <Image src="/hero-image.jpg" alt="Hero Image" width={1920} height={1080} />
      <div className="hero-content">
        <h1>Welcome to The Travel Coach</h1>
        <p>Plan your dream trip with our expert guidance</p>
        <button>Get Started</button>
      </div>
    </section>
  );
};

export default HeroSection;