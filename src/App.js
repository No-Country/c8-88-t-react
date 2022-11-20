import './App.css';
import Home from './components/Home';
import { Routes, Route} from 'react-router';
import Login from './components/Login';
import Register from './components/Register';
import Cuenta from './components/Cuenta';
 

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cuenta" element={<Cuenta/>}/>
    </Routes>
    );
  }
    
     

export default App;
