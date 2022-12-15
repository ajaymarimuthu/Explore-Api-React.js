import React from 'react'
import { useEffect, useState } from 'react'
import Axios from 'axios';
import './Nasa.css'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import NasaList from './NasaList';
// import { Link } from 'react-router-dom';
// import MarsRover from './MarsRover';


function Nasa() {

  const Apikey = `F0glGJsJyvHORZzoOKXday7jkM0FKQ8nUNZkZPCD`
  const ApodApi = `https://api.nasa.gov/planetary/apod?api_key=${Apikey}`
   const MarsPhotos=`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${Apikey}`;

  const [data, setData] = useState([])
  const [toggle, setToggle] = useState(false)

  
  const [photos, setPhotos] = useState([])
  const [MarsToggle, setMarsToggle] = useState(false)

  useEffect(() => {
    getNasaData();
  })

  const getNasaData = async () => {

    // const result=await Axios.get(ApodApi);
    // const result1=await Axios.get(MarsPhotos);

    // setData(result.data)
    // setPhotos(result1.data.photos)
 
  }

  const handleClick = (e) => {
   
    setToggle(!toggle);
  }

  const handleMars = (e) => {

  console.log("marss");
     
     setMarsToggle(!MarsToggle);
  }


  return (
    <div className='nasa'>

 

      <NasaList data={data} photos={photos} handleClick={handleClick} handleMars={handleMars} MarsToggle={MarsToggle} toggle={toggle}/>
 
    </div>
  )
}

export default Nasa