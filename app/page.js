import Banner from '../components/Header/Banner'
import Services from '../components/Services/Services'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <Banner />
      <Services />
      {/* <Products /> */}
      {/* <Testimonials /> */}
    </section>
  )
}

export default Home
