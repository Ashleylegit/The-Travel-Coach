import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Image src="/hero-image.jpg" alt="Hero Image" width={1200} height={600} />
      <h1>Welcome to The Travel Coach</h1>
      <p>Explore the world with us</p>
    </section>
  );
};

export default HeroSection;
