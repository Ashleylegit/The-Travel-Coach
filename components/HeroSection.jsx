import React from 'react';

const HeroSection = ({ title, subtitle, backgroundImage }) => (
  <section
    className="hero-section"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  >
    <div className="hero-content">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </section>
);

export default HeroSection;
