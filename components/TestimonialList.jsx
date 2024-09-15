import { useState, useEffect } from 'react';
import axios from 'axios';

const TestimonialList = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios.get('/api/testimonials')
      .then(response => {
        setTestimonials(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <section className="testimonial-list">
      {testimonials.map(testimonial => (
        <div key={testimonial.id}>
          <blockquote>{testimonial.quote}</blockquote>
          <p>{testimonial.author}</p>
        </div>
      ))}
    </section>
  );
};

export default TestimonialList;
