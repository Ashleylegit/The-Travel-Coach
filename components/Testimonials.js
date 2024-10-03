import Carousel from 'react-multi-carousel';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="carousel-container"
        dotListClass="carousel-dots"
        focusOnSelect={false}
        infinite={true}
        itemClass="carousel-item"
        keyBoardControl={true}
        minimumTouchDrag={80}
        renderButtonGroupOutside={true}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={true}
        sliderClass="carousel-slider"
        swipeable={true}
      >
        <div className="testimonial">
          <p>
            The Travel Coach helped us plan an unforgettable trip to Europe!
          </p>
          <h4>John Doe</h4>
        </div>
        <div className="testimonial">
          <p>
            Their expert guidance made our honeymoon dreams come true!
          </p>
          <h4>Jane Smith</h4>
        </div>
        <div className="testimonial">
          <p>
            We couldn't have asked for a smoother travel experience!
          </p>
          <h4>Bob Johnson</h4>
        </div>
      </Carousel>
    </section>
  );
};

export default Testimonials;