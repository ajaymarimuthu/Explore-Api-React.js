import axios from 'axios';
import React, { useEffect,useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import CovidList from './CovidList';
 

function Covid() {


  const Api=`https://api.rootnet.in/covid19-in/stats/latest`;

  const [data, setData] = useState("")

  useEffect(()=>{
    getCovidDetails();
  })

  const getCovidDetails = async() =>{

    const result=await Axios.get(Api);
    // console.log(result.data.data);

    console.log(result.data.data.regional);

  }


  return (
    <div>


     <CovidList/>
  
      

    </div>
  )
}

export default Covid