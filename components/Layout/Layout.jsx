import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}