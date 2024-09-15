import { useState, useEffect } from 'react';
import Image from 'next/image';

const FeaturedDestinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('/api/destinations');
        const data = await response.json();
        setDestinations(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchDestinations();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <section className="featured-destinations">
      <h2>Featured Destinations</h2>
      <ul>
        {destinations.map((destination) => (
          <li key={destination.id}>
            <Image
              src={destination.image}
              alt={destination.name}
              width={400}
              height={300}
            />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeaturedDestinations;
