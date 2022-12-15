import React from 'react'
import Table from 'react-bootstrap/Table';
// import { DataGrid } from '@mui/x-data-grid';
function CryptoList({ cryptos }) {
    return (
        <div>

            <Table striped bordered hover size="sm"  >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Coin</th>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Total Supply</th>
                        <th>Mkt Cap Rank</th>
                        <th>24h Volume</th>
                    </tr>
                </thead>

                <tbody>
                    {cryptos.map((crypto,id) => (

                        <tr key={id}>
                            <td>{id+1}</td>
                             
                            <td>{crypto.id}</td>
                            <td>{crypto.symbol}</td>
                            <td>{crypto.price_change}</td>
                            <td><img src={crypto.image} /></td>
                            <td>{crypto.total_supply}</td>
                            <td>{crypto.market_cap_rank}</td>
                            <td>{crypto.total_volume}</td>

                        </tr>
                    ))}


                </tbody>
            </Table>
        </div>
    )
}

export default CryptoList