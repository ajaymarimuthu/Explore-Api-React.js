import React from 'react'
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Unstable_Grid2';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

function MarsRover({ photos }) {
  return (
    <div>

      {photos.map((photo) => {
        return <img src={photo} />
      })}  


      {/* <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(photos.length/2)).map((_, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <Item>xs=2</Item>
            </Grid>
          ))}
        </Grid>
      </Box> */}

    </div>
  )
}

export default MarsRover