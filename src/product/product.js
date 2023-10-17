
import React from "react";
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Header from "./pheader";
import { Link } from "react-router-dom";




export default function Product(props) {
    const [list,setList] =useState([])
      async function productlist() {
       await fetch ('http://localhost:3001/api/v1/products', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            
          })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              setList(data)
            })
            .catch(error => {
              console.log(error);
            });
          
     } 
     
     useEffect(()=>{
        productlist();
     },[])

     return (
        
         <>
         <Header></Header>
        
            <Grid container sm={12} mt={4} spacing={3}  >

        {
            list.map((item)=>{
                return (
                    <Grid item sm={3} >
                    <Card sx={{ height: 345 }}>
                      <Grid container sm={12} display='flex' flexDirection='column' justifyContent='space-between'  height='100%' >
                    <Grid item height='85%' overflow='scroll'>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.imageURL}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography className="pname" gutterBottom variant="h5" component="div">
                         {item.name}
                        </Typography>
                        <Typography className="description" variant="body2" color="text.secondary" >
                         {item.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    </Grid>
                    <Grid item>
                    <CardActions>
                      <Link to='../order/order'><Button  onClick={()=>props.buy(item)} className="buy" size="small" color="primary" variant="contained">
                        Buy
                      </Button>
                      </Link>
                    </CardActions>
                    </Grid>
                  </Grid>
                  </Card>
                  </Grid>
                )
            })
        }
        </Grid>
        </>
     )
}