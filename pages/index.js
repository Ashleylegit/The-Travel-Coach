import Hero from '../components/Hero';
import Image from 'next/image'; 

function HomePage() {
  return (
    <div>
      <Hero image="/hero-image.jpg">
        <h1 className="text-4xl font-bold text-white">Welcome to The Travel Coach</h1>
        <p className="text-lg text-white">Plan your dream trip today!</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
      </Hero>
      {/* ... */}
    </div>
  );
}

export default HomePage;