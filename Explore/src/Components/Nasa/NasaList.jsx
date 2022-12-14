import React from 'react'
 
import './Nasa.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import { Link } from 'react-router-dom';
 

function NasaList({ data,handleClick ,toggle}) {
    return (


        <div className='nasa'>

     {/* <Link to="/aptod"> </Link> */}

            <h1>Nasa Website</h1>

            <div className="mb-2 space-butttons">
                <Button className='btn'
                    onClick={handleClick}
                    variant="warning" >
                    APOD
                </Button>

                <Button className='btn' 
                //  onClick={handleClick}
                variant="warning" >
                    Delta
                </Button>

                <Button className='btn' variant="warning" >
                    spider
                </Button>
                <Button className='btn' variant="warning" >
                    APOD
                </Button>
                <Button className='btn' variant="warning" >
                    APOD
                </Button>

                {toggle ?

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
                            {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
                        </Card>

                    </div>

                    : null}

 
            </div>
 
        </div>
    )
}

export default NasaList