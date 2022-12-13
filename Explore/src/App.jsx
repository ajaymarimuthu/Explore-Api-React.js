import 'bootstrap/dist/css/bootstrap.min.css';
//Above line of code is for bootstrap from react bootstrap
import './App.css'
import Navbar from './Components/Navbar/Navbar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import Crypto from './Components/Crypto/Crypto';
import Nasa from './Components/Nasa/Nasa'
import Covid from './Components/Covid/Covid'
import CryptoList from './Components/Crypto/CryptoList';
function App() {

 


  return (
    <div className="App">

      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/crypto" element={<Crypto/>}/>
          <Route path="/nasa" element={<Nasa/>}/>
          <Route path="/covid" element={<Covid/>}/>
          <Route path="/cryptoList" element={<CryptoList/>}/>
        </Routes>

      </Router>






    </div>
  )
}

export default App
