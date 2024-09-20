import React from 'react';
import './styles/main.css';
import Router from './routes';

const Page = () => {
  return (
    <html lang="en">
      <head>
        {/* Meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Link tags */}
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        
        {/* Style tags */}
        <style data-url="styles/main.css"></style>
      </head>
      <body>
        <Router />
        {/* Main content */}
        <div className="site-container">
          {/* Header */}
          <Header />
          
          {/* Pages */}
          <Pages />
          
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
};

const Header = () => {
  return (
    <header className="bg-gray-200 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex items-center space-x-4">
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Destination Guide</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Travel Planning</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Community Forum</a></li>
        </ul>
        <h1 className="text-3xl font-bold">The Travel Coach</h1>
      </nav>
    </header>
  );
};

const Pages = () => {
  return (
    <main className="container mx-auto p-4">
      <section className="hero bg-gray-100 py-12">
        <h2 className="text-4xl font-bold mb-4">Explore the World with
        The Travel Coach</h2>
        <p className="text-lg">
        Explore the World with The Travel Coach Discover the world’s hidden gems with The Travel Coach. Tailored to your style, our expert guidance will lead you from Tokyo’s vibrant streets to Rome’s ancient ruins. Whether you’re a seasoned traveler or planning your first adventure, let us help you create unforgettable memories.</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
      </section>
      <section className="features py-12">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <ul className="list-disc pl-4">
          <li>Personalized travel planning</li>
          <li>Expert travel advice</li>
          <li>Customized itineraries</li>
        </ul>
      </section>
    </main>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <p className="text-gray-600">&copy; 2024 The Travel Coach</p>
      <ul className="flex items-center space-x-4">
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of Use</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
      </ul>
    </footer>
  );
};

export default Page;
