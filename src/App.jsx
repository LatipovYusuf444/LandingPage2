import './App.css'
import FirstPage from './components/firstPage'
import Navbar from './components/navbar'
import Poland from './components/poland'
import Products from './components/products'
import Shop from './components/shop'
import Working from './components/working'
import Footer from './pages/footer'

function App() {

  return (
    <>
      <Navbar />
      <FirstPage />
      <Working />
      <Poland />
      <Products />
      <Shop />
      <Footer />
    </>
  )
}

export default App
