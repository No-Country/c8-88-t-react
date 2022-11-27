import Home from './components/Pages/Home/Home';
import { Routes, Route } from 'react-router';
import { Nav } from './components/Navbar/Nav';
import Login from './components/Login';
import Seguimiento from './components/Pages/Seguimientos/Seguimiento';
import ChooseTravel from './components/Pages/Envios/ChooseTravel';
import OfertTravel from './components/Pages/Envios/OfertTravel';
import Envios from './components/Pages/Envios/Envios';
import Cuenta from './components/Pages/Cuenta/Cuenta';
import { Footer } from './components/Footer/Footer';



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
      <Route path="/cuenta" element={<Cuenta /> } />
    </Routes>
    <Footer/>
  </>);
}


export default App;
