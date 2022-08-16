import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import { ShoppingCartProvider } from './Context/shoppingCartContext';

function App() {
  return (

    <ShoppingCartProvider>
      <Navbar />

      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Container>

      <Footer />
    </ShoppingCartProvider>

  );
}

export default App;
