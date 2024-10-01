import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}
