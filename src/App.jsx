import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import Hombre from './components/Hombre';
import Mujer from './components/Mujer';
import Login from './components/Login'; 
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';
import Carrito from './components/Carrito'; 
import CrudProductos from './components/CrudProductos';

function App() {

  return (
    <CartProvider>
     <Router>
      <Header />
      <Routes>
        <Route path="/administracion" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Hombre" element={<Hombre />} />
        <Route path="/Mujer" element={<Mujer />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/crud" element={<CrudProductos />} />
      </Routes>
      <Footer/>
    </Router>
    </CartProvider>
  )
}

export default App
