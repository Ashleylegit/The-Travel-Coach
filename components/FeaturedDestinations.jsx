import { useState, useEffect } from 'react';
import axios from 'axios';

const FeaturedDestinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    axios.get('/api/destinations')
      .then(response => {
        setDestinations(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <section className="featured-destinations">
      {destinations.map(destination => (
        <div key={destination.id}>
          <h2>{destination.name}</h2>
          <p>{destination.description}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturedDestinations;
