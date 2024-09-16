import Head from 'next/head';
import Header from '../components/Header';
import AboutContent from '../../../components/AboutContent';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About | The Travel Coach</title>
      </Head>
      <Header />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default AboutPage;
