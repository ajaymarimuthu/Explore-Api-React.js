import React from 'react'
// import './Nasa.css'
import './Apod.css'

import Card from 'react-bootstrap/Card';

function Apod({data}) {
    return (
     
 
            <div className='apod'>

                <Card className="apod-card">
                    <Card.Header><h1>{data.date}</h1></Card.Header>
                    <Card.Body className='apod-text'>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text >
                            {data.explanation}
                        </Card.Text>
                        <img src={data.hdurl} />
                    </Card.Body>

                </Card>

            </div>
 
    )
}

export default Apod