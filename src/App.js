import { Routes, Route } from 'react-router-dom';
import './App.css';
import CoinsAxios from './services/coins';
import { useEffect, useState } from 'react';
import TableCoins from './components/Market/CoinTable';
import NavbarCoinMap from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const coinsAxios = new CoinsAxios()
  const [coinList, setCoinList] = useState([])
   const getAll = () => {
    coinsAxios
    .getCoinList()
    .then((coinList) => {
      setCoinList(coinList)
    })
    .catch((err) => console.log(err))
   }
   useEffect(() =>{
      getAll()
    }, [])

  return (
    <div className="container">
      <div className="row">
        <h1>CoinMap-Market</h1>
        <TableCoins coinList={coinList}/>
      </div>
    </div>
  );
}

export default App;
