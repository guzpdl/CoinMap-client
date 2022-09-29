import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppRoutes from './routes/AppRoutes';
import NavbarCoinMap from './components/Navbar/Navbar';

function App() {

 

  return (
    <>
    <NavbarCoinMap />
      <AppRoutes/>
    </>
  );
}

export default App;
