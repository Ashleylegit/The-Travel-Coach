import Head from 'next/head';
import Testimonials from '../components/Testimonials';

const TestimonialsPage = () => {
  return (
    <div>
      <Head>
        <title>Testimonials | The Travel Coach</title>
        <meta name="description" content="Read what our clients say about us" />
      </Head>
      <Testimonials />
    </div>
  );
};

export default TestimonialsPage;