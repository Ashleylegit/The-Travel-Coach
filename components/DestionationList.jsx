import { useState, useEffect } from 'react';
import axios from 'axios';

const DestinationList = () => {
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
    <section className="destination-list">
      {destinations.map(destination => (
        <div key={destination.id}>
          <h2>{destination.name}</h2>
          <p>{destination.description}</p>
        </div>
      ))}
    </section>
  );
};

export default DestinationList;
