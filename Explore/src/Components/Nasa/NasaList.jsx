import React from 'react'
 
import './Nasa.css'
import Button from 'react-bootstrap/Button';

import Apod from './Apod';
import MarsRover from './MarsRover';
 

function NasaList({ data,handleClick ,handleMars,toggle,MarsToggle,photos}) {
    return (


        <div className='nasa'>

           
           <h1>Nasa Website</h1>

            <div className="mb-2 space-butttons">
                <Button className='btn'
                    onClick={handleClick}
                    value={1}
                    variant="warning" >
                    APOD
                </Button>

                <Button className='btn' 
                 onClick={handleMars}
                 value={2}
                variant="warning" >
                    Mars Rover images
                </Button>

                {/* <Button className='btn' variant="warning" >
                    spider
                </Button>
                <Button className='btn' variant="warning" >
                    APOD
                </Button>
                <Button className='btn' variant="warning" >
                    APOD
                </Button> */}

                {toggle ? <Apod data={data}/> : null  }
                {MarsToggle ? <MarsRover photos={photos}/>:null}

 
            </div>  
 
        </div>
    )
}

export default NasaList