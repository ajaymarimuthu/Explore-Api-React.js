import React, { useEffect,useState } from 'react'
import Axios from 'axios';
import { DataGrid } from '@mui/x-data-grid';
// import CovidList from './CovidList';
import Table from '@mui/material/Table';

function Covid() {


  const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'loc', headerName: 'Location', width: 250 },
    { field: 'confirmedCasesForeign', headerName: 'Foreign confirmed', width: 150 },
    { field: 'confirmedCasesIndian', headerName: 'Indian confirmed',type: 'number',width: 150},
    { field: 'deaths',headerName:'Deaths', width:150},
    { field: 'discharged',headerName:'Discharged', width:150},
    { field: 'totalConfirmed',headerName:'Confirmed', width:150},
   
  ];


  const Api=`https://api.rootnet.in/covid19-in/stats/latest`;

  const [data, setData] = useState([])

  useEffect(()=>{
    getCovidDetails();
  })

  const getCovidDetails = async() =>{

    // const result=await Axios.get(Api);
    // console.log(result.data.data);

    // setData(result.data.data.regional);
    
 

    // console.log(result.data.data.regional);

  }
  const getRowId = (row) =>{

    return row._id

  }

  return (
    <div>
 

     {/* <CovidList data={data}/> */}
    
     <div style={{ height: 1000, width: '100%' }}>
 
      <DataGrid className='table-header'
        rows={data}
        getRowId={(row) => row.totalConfirmed}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[10]}  
        
      />
    </div> 
  
      

    </div>
  )
}

export default Covid