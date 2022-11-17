import './App.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import { Envios } from './components/Envios/Envios';
import { Seguimiento } from './components/Seguimiento';
import { Cuenta } from './components/Cuenta';
import { Nav } from './components/Navbar/Nav';
import { ChooseTravel } from './components/Envios/ChooseTravel';


function App() {
  return (<>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/envios" element={<Envios />} />
      <Route path="/chooseTravel" element={<ChooseTravel />}></Route>
      <Route path="/seguimiento" element={<Seguimiento />} />
      <Route path="/cuenta" element={<Cuenta />} />
    </Routes>
  </>);
}


export default App;
