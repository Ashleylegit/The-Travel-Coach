import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="grid container mx-auto p-4 md:p-6 lg:p-8">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;