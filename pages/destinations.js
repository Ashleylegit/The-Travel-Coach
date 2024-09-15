import Head from 'next/head';
import DestinationList from '../components/DestinationList';

const DestinationsPage = () => {
  return (
    <div>
      <Head>
        <title>Destinations | The Travel Coach</title>
        <meta name="description" content="Explore our featured destinations" />
      </Head>
      <DestinationList />
    </div>
  );
};

export default DestinationsPage;
