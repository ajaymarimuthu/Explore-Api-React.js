import React from 'react'
import Table from 'react-bootstrap/Table';
import './CryptoList.css'
// import { DataGrid } from '@mui/x-data-grid';
function CryptoList({ cryptos }) {
    return (
        <div className='crypto-table'>

            <h1>CRYPTO CURRENCY</h1>

            <Table striped bordered hover size="sm"  >
                <thead className='thead'>
                    <tr className='thead-heading'>
                        <th >#</th>
                        <th>Coin</th>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Total Supply</th>
                        <th>Mkt Cap Rank</th>
                        <th>24h Volume</th>
                    </tr>
                </thead>

                <tbody className='thead'>
                    {cryptos.map((crypto,id) => (

                        <tr key={id}>
                            <td className='crypto-item'>{id+1}</td>
                             
                            <td className='crypto-item'>{crypto.id}</td>
                            <td className='crypto-item'>{crypto.symbol}</td>
                            <td className='crypto-item'>{crypto.price_change}</td>
                            <td className='crypto-item'><img className='crypto-img' src={crypto.image} /></td>
                            <td className='crypto-item'>{crypto.total_supply}</td>
                            <td className='crypto-item'>{crypto.market_cap_rank}</td>
                            <td className='crypto-item'>{crypto.total_volume}</td>

                        </tr>
                    ))}


                </tbody>
            </Table>
        </div>
    )
}

export default CryptoList