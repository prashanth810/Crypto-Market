import logo from './logo.svg';
import './App.css';
import Cryptonavbar from './Nav bar/Cryptonavbar';
import { Route, Routes } from 'react-router-dom';
import Homecrypto from './Pages/Home/Homecrypto';
import Coin from './Pages/coin/Coin';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Cryptonavbar />
      <Routes>
        <Route path='/' element={<Homecrypto />} />
        <Route path='/coin/:coinId' element={<Coin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
