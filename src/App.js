import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router';
import Login from './components/Login';
import { Seguimiento } from './components/Seguimiento';
import { Nav } from './components/Navbar/Nav';
import ChooseTravel from './components/Envios/ChooseTravel';
import OfertTravel from './components/Envios/OfertTravel';
import Envios from './components/Envios/Envios';
import Cuenta from './components/Cuenta';
import MiPaquete from './components/Envios/MiPaquete';


function App() {
  return (<>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/envios" element={<Envios />} />
      <Route path="/chooseTravel" element={<ChooseTravel />}></Route>
      <Route path="/ofertTravel" element={<OfertTravel />}></Route>
      <Route path="/seguimiento" element={<Seguimiento />} />
      <Route path="/cuenta" element={<Cuenta />} />
      <Route path="/mipaquete" element={<MiPaquete />} />
    </Routes>
  </>);
}


export default App;
