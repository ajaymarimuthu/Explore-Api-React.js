import React from 'react'
import './Home.css'
import Button from '@mui/material/Button';
import RocketSharpIcon from '@mui/icons-material/RocketSharp';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
function Home() {
  return (
    <div className='home'>

      <h1>Explore API</h1>


      <div className="home-text">

        <p> <bold>Explore API</bold> is one of the widely used website. Where information about NASA , COVID ,
          CRYPTOCURRENCY can be found
          Achievements , day to day activites, findings of NASA in space , researches Which NASA conducting and other such informations will be available in the Explore API</p>

        {/* <ul className='home-list'>
          <li className='home-list-item'> <h6>NASA</h6></li>
          <li className='home-list-item'> <h6>COVID</h6></li>
          <li className='home-list-item'> <h6>CRYPTO</h6></li>
        </ul> */}

 

      </div>

      <h1></h1>
    </div>
  )
}

export default Home



{/* <h6><RocketSharpIcon />NASA    </h6>
        <h6><CoronavirusIcon /> COVID   </h6>
        <h6><CurrencyBitcoinIcon />CRYPTOCURRENCY  </h6>  */}