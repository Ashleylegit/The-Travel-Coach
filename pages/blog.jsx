import Head from 'next/head';
import Header from '../components/Header';
import BlogPosts from '../components/BlogPosts';
import Footer from '../components/Footer';

const BlogPage = () => {
  return (
    <div>
      <Head>
        <title>Blog | The Travel Coach</title>
      </Head>
      <Header />
      <BlogPosts />
      <Footer />
    </div>
  );
};

export default BlogPage;
