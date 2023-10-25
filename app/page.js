import Banner from '../components/Header/Banner'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials'
import ProductsContainer from '../components/Products/ProductsContainer'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <Banner />
      <Services />
      <ProductsContainer />
      <Testimonials />
    </section>
  )
}

export default Home
