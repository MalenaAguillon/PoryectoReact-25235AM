import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import Hombre from './components/Hombre';
import Mujer from './components/Mujer';
import Login from './components/Login'; 
import Footer from './components/Footer'

function App() {

  return (
     <Router>
      <Header />
      <Routes>
        <Route path="/administracion" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Hombre" element={<Hombre />} />
        <Route path="/Mujer" element={<Mujer />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
