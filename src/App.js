import Home from './components/Pages/Home/Home';
import { Routes, Route } from 'react-router';
import { Nav } from './components/Navbar/Nav';
import Login from './components/Login';
import Seguimiento from './components/Pages/Seguimientos/Seguimiento';
import ChooseTravel from './components/Pages/Envios/CardTravel/ChooseTravel';
import OfertTravel from './components/Pages/Envios/OfertTravel/OfertTravel';
import FirstForm from './components/Pages/Envios/FirstForm/FirstForm';
import Cuenta from './components/Pages/Cuenta/Cuenta';
import { Footer } from './components/Footer/Footer';
import CheckPack from './components/Pages/Envios/CheckPack/CheckPack';
import { Auth } from './components/Pages/Auth/Auth';
import OrderOk from './components/Pages/Envios/OrderOk/OrderOk';



function App() {
  return (<>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/firstForm" element={<FirstForm />} />
      <Route path="/chooseTravel" element={<ChooseTravel />} />
      <Route path="/ofertTravel" element={<OfertTravel />} />
      <Route path="/checkPack" element={<CheckPack />} />
      <Route path="/seguimiento" element={<Seguimiento />} />
      <Route path="/cuenta" element={<Cuenta /> } />
      <Route path="/auth" element={<Auth/>}/>
      <Route path="/orderOk" element={<OrderOk />}/>
    </Routes>
    <Footer/>
  </>);
}


export default App;
