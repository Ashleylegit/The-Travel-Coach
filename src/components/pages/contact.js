import Head from 'next/head';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div>
      <Head>
        <title>Contact | The Travel Coach</title>
      </Head>
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactPage;
