import React from 'react'
import { useEffect, useState } from 'react'
import Axios from 'axios';
import './Nasa.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NasaList from './NasaList';

function Nasa() {

  const Apikey = `F0glGJsJyvHORZzoOKXday7jkM0FKQ8nUNZkZPCD`
  const ApodApi = `https://api.nasa.gov/planetary/apod?api_key=${Apikey}`


  const [data, setData] = useState([])
  const [toggle, setToggle] = useState(false)


  useEffect(() => {
    getNasaData();
  })

  const getNasaData = async () => {

    const result=await Axios.get(ApodApi);
    setData(result.data)
    console.log(result.data);
  }

  const handleClick = () => {
    // console.log("clciked");
    setToggle(!toggle);
  }


  return (
    <div className='nasa'>

      <NasaList data={data} handleClick={handleClick} toggle={toggle}/>
 
    </div>
  )
}

export default Nasa