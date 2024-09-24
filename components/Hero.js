import Image from 'next/image';

function Hero({ image, children }) {
  return (
    <section className="relative h-screen">
      <Image src={image} alt="Hero Image" layout="fill" objectFit="cover" />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="text-center">
          {children}
        </div>
      </div>
    </section>
  );
}

export default Hero;