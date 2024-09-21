const Testimonial = ({ quote, author, image }) => (
  <div className="testimonial">
    <blockquote>{quote}</blockquote>
    <p>&mdash; {author}</p>
    <img src={image} alt={author} />
  </div>
);

export default Testimonial;