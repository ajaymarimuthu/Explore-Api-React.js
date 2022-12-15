import React, { useEffect,useState } from 'react'
 
import { DataGrid } from '@mui/x-data-grid';
 
 

function CryptoList2({cryptos}) {


    
  const columns = [
    // { field: 'market_cap_rank', headerName: 'Market_Rank', width: 70 },
    { field: 'id', headerName: 'Name', width: 250 },
    { field: 'symbol', headerName: 'Symbol', width: 250 },
    { field: 'price_change_24h', headerName: 'price',type: 'number',width: 250},
    { field: 'image',headerName:'Image', render:(cryptos)=><img src={cryptos.image} /> , width:250},
    { field: 'total_supply',headerName:'Total Supply', width:250}
 
   
  ];


 

    const getRowId = (row) =>{

        return row._id
    
      }
    return (
        <div>


            <div style={{ height: 1000, width: '100%' }}>

                <DataGrid className='table-header'
                    rows={cryptos}
                    getRowId={(row) => row.market_cap_rank}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[5]}

                />
            </div>


        </div>
    )
}

export default CryptoList2