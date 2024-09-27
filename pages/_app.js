// pages/_app.js
import Head from 'next/head';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Head>
        <title>The Travel Coach</title>
        <meta name="description" content="Travel planning made easy" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="travel, planning, coach" />
      </Head>
      <Header />
      <Component {...pageProps} />
      </Layout>
      <NextSeo {...seoConfig} />
      <Footer />
    </>
  );
}

export default MyApp;