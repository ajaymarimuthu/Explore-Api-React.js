import React, { useEffect } from 'react'
import Axios from 'axios'
import { useState } from 'react';
import CryptoList from './CryptoList';
// import CryptoList2 from './CryptoList2';

function Crypto() {

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;


  const [data, setData] = useState([]);


  useEffect(()=>{
    getCryptos();
  })


  const getCryptos = async () => {

    const result = await Axios.get(url);

    console.log(result.data);

    setData(result.data);
  }



  return (

    <div>
 
 
      <CryptoList cryptos={data}/>

      {/* <CryptoList2 cryptos={data} /> */}


    </div>
  )
}

export default Crypto