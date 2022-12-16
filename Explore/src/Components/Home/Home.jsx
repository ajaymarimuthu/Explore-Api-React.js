import React from 'react'
import './Home.css'
import covid from '../../images/covid.jpg'
import nasa from '../../images/nassa-2.jpg'
import crypto from '../../images/crypto.jpg'

// import Button from '@mui/material/Button';
// import RocketSharpIcon from '@mui/icons-material/RocketSharp';
// import CoronavirusIcon from '@mui/icons-material/Coronavirus';
// import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
function Home() {
  return (
    <div className='home'>

      <h1>Explore API</h1>


      <div className="home-text">

        <p> <span>Explore API</span> is one of the widely used website. Where information about NASA , COVID ,
          CRYPTOCURRENCY can be found .
          Achievements , day to day activites, findings of NASA in space , researches Which NASA conducting and other such informations will be available in the Explore API</p>

        <p>One of the deadliest virus (CORONA) of 22nd century which infected all around the world. Information regarding the cases of infection and deaths , Confirmed cases and discharged information also available in this website .      </p>


        <p>Information regarding Nasa and its achievements and thier activities to improve the human kind.</p>

      </div>
      
      <div className="image-container">

        <img className='image-container-item covid-img' src={covid} style={{ width: 300, height: 200 }} />

        <img className='image-container-item crypto-img' src={crypto} style={{ width: 300, height: 200 }} />

        <img className='image-container-item nasa-img' src={nasa} style={{ width: 300, height: 200 }} />
 
      </div>


      <h1></h1>
    </div>
  )
}

export default Home



{/* <h6><RocketSharpIcon />NASA    </h6>
        <h6><CoronavirusIcon /> COVID   </h6>
        <h6><CurrencyBitcoinIcon />CRYPTOCURRENCY  </h6>  */}