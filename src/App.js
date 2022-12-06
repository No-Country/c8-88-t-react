import Home from './components/Pages/Home/Home';
import { Routes, Route } from 'react-router';
import { Nav } from './components/Navbar/Nav';
import Login from './components/Login';
import Seguimiento from './components/Pages/Seguimientos/Seguimiento';
import ChooseTravel from './components/Pages/Envios/CardTravel/ChooseTravel';
import OfertTravel from './components/Pages/Envios/OfertTravel/OfertTravel';
import FirstForm from './components/Pages/Envios/FirstForm/FirstForm';
import { Cuenta } from './components/Pages/Cuenta/Cuenta';
import { Footer } from './components/Footer/Footer';
import CheckPack from './components/Pages/Envios/CheckPack/CheckPack';
import { Auth } from './components/Pages/Auth/Auth';
import ProtectedRoute from './Routes/ProtectedRoute';
import PrivateRoute from './Routes/PrivateRoutes';
import MiPaquete from './components/Pages/Seguimientos/MiPaquete';
import OrderOk from './components/Pages/Envios/OrderOk/OrderOk';
import "./App.css"; import Register from './components/Register';
import Envios from './components/Pages/Envios/Envios/Envios';



function App({ user }) {

  return (
    <>
      <Nav />
      <div className='wrapper_app'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<ProtectedRoute user={user}><Login /></ProtectedRoute>} />
          <Route path="/envios" element={<Envios />} />
          <Route path="/register" element={<Register />}></Route>
          <Route path="/chooseTravel" element={<PrivateRoute><ChooseTravel /></PrivateRoute>}></Route>
          <Route path="/ofertTravel" element={<PrivateRoute><OfertTravel /></PrivateRoute>}></Route>
          <Route path="/checkPack" element={<PrivateRoute><CheckPack /></PrivateRoute>}></Route>
          <Route path="/seguimiento" element={<PrivateRoute><Seguimiento /></PrivateRoute>} />
          <Route path="/mipaquete/:id" element={<MiPaquete />} />
          <Route path="/cuenta" element={<PrivateRoute user={user}><Cuenta /></PrivateRoute>} />
          <Route path="/firstForm" element={<FirstForm />} />
          <Route path="/auth" element={<ProtectedRoute user={user}><Auth /></ProtectedRoute>} />
          <Route path="/orderOk" element={<OrderOk />} />
        </Routes>
      </div>

      <Footer />
    </>);
}



export default App;
