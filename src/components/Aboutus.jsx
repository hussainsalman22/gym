import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button'

function Aboutus() {
  return (
    <>
    <h1 style={{marginTop:60+"px" , textAlign:"center"}}>OUR SERVICES</h1>
    <div style={{display:"flex",justifyContent:"space-between" ,flexWrap:"wrap"}}>
    <Card  sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://images.pexels.com/photos/2204196/pexels-photo-2204196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="green iguana"
        />
        <CardContent style={{display:'flex', justifyContent:"center", flexDirection:"column"}}>
          <Typography gutterBottom variant="h5" component="div">
            PERSONAL TRAINER
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat placeat voluptatibus similique earum fugiat tempora nobis laborum, officia laudantium vitae consequuntur dolores eligendi animi ea cumque. Repellendus, voluptas optio minima nemo neque dolorem. Nisi, animi dolorem. Dignissimos vitae omnis dolore temporibus rerum hic, doloremque enim voluptas natus commodi dolorum?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="medium" variant="outlined">BOOK NOW</Button>

      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            CARDIO
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="medium" variant="outlined">BOOK NOW</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://images.pexels.com/photos/2377165/pexels-photo-2377165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           DIET PLAN
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="medium" variant="outlined">BOOK NOW</Button>
      </CardActions>
    </Card>
    </div>
    </>
  );
}

export default Aboutus
