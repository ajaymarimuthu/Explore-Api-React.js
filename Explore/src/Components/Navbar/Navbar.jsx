import React from 'react'
import { Link } from 'react-router-dom'

// import './Navbar.css'


function Navbar() {

    return (

        <div>
            <Link to="/">ExploreAPI</Link>
            <Link to="/crypto">Crypto</Link>
            <Link to="/covid">Covid</Link>
            <Link to="/nASA">NASA</Link>
            {/* <Link to="/cryptolist">CryptoList</Link> */}
        </div>
  
    )
}

export default Navbar;