import Categories from '../../components/Categories/Categories'
import Footer from '../../components/Footer/Footer'
import Products from '../../components/Products/Products'
import './Home.sass'

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        <Categories />
        <Products />
        <Footer />
    </div>
  )
}

export default Home