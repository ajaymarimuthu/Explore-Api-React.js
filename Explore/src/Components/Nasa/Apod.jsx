import React from 'react'
import './Nasa.css'


import Card from 'react-bootstrap/Card';

function Apod({data}) {
    return (
        <div className='nasa'>
 
            <div className='space-data'>

                <Card className="text-center">
                    <Card.Header><h1>{data.date}</h1></Card.Header>
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>
                            {data.explanation}
                        </Card.Text>
                        <img src={data.hdurl} />
                    </Card.Body>

                </Card>

            </div>
 
        </div>
    )
}

export default Apod