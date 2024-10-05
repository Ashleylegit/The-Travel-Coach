import Image from 'next/image';

const Testimonial = ({ quote, author }) => (
  <div className="testimonial">
    <blockquote>{quote}</blockquote>
    <p>&mdash; {author}</p>
    <Image
      src={testimonial.avatar}
      alt={`${testimonial.name}'s avatar`}
      width={64}  // Adjust this value based on your design requirements
      height={64} // Adjust this value based on your design requirements
    />
  </div>
);

export default Testimonial;


