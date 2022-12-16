import React from 'react'
 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function MarsRover({ photos }) {
  return (
    <div>
      <h1>Rover Details</h1>



      <ul>
        {
          photos.map((photo) => {
            // return <div>
            //   <li style={{color:"white"}}> {photo.earth_date} </li>
            //   <li style={{color:"white"}}> <img src={photo.img_src} /></li>
            //   <li style={{color:"white"}}> {photo.rover.name }  </li>
            //   <li style={{color:"white"}}> {photo.rover.launch_date }  </li>
            //   <li style={{color:"white"}}> {photo.rover.landing_date }  </li>
            //   <li style={{color:"white"}}> {photo.rover.status }  </li>




            // </div>

            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image=  {photo.img_src}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {photo.rover.name} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {photo.rover.name }
                {photo.rover.launch_date } 
                {photo.rover.landing_date }
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Status:{photo.rover.status }</Button>
                {/* <Button size="small">LaunchDAte</Button> */}
              </CardActions>
            </Card>
          })
        }

      </ul>


    </div>
  )
}

export default MarsRover