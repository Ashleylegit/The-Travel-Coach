import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Image src="/hero-image.jpg" alt="Hero Image" width={1920} height={1080} />
      <div className="hero-content">
        <h1>Welcome to The Travel Coach</h1>
        <p>Expert travel advice and inspiration</p>
        <Link href="/destinations">
          <a>Explore Destinations</a>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
