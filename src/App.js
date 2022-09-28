import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavbarCoinMap from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>

    <NavbarCoinMap/>
    <Routes>
    <Route path='/home' element={<HomePage/>}/>



    </Routes>

    </div>
  );
}

export default App;
