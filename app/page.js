import Banner from '../components/Header/Banner'
import Services from '../components/Services/Services'
import Products from '../components/Products/Products'
import Testimonials from '../components/Testimonials/Testimonials'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <Banner />
      <Services />
      <Products />
      <Testimonials />
    </section>
  )
}

export default Home
