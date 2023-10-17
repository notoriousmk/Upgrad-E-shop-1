import React from 'react';
import  {useState} from "react";
import { Grid, Button, Typography, TextField } from '@material-ui/core';
import Header from '../product/pheader';
import { Navigate } from 'react-router-dom';





function Order(props) {
  const navigate = Navigate();
 console.log(props.product)

 
 const [selectedQuantity, setSelectedQuantity] = useState(1);

 const handleQuantityChange = (e) => {
   const quantity = parseInt(e.target.value, 10);
   setSelectedQuantity(quantity);
 };





 
  return (
      <>
      
     <Header></Header>

    <Grid container spacing={2} >
      
      <Grid item  display="flex"  justifyContent="center"   >
      <img  src={props.product.imageURL} alt={props.product.name} ></img>
      </Grid>

     
      <Grid item xs={12} md={6}>
      <Typography variant="h4">{props.product.name}</Typography>
        <Typography variant="body1">{props.product.discription}</Typography>
        <Typography variant="body1">{props.product.category}</Typography>
        <Typography variant="body1">{props.product.available_Quantity}</Typography>
        <Typography variant="body1">{props.product.price}</Typography>
     
      <TextField
          label="Quantity"
          type="number"
          value={selectedQuantity}
          onChange={handleQuantityChange}
          inputProps={{ min: 1, max: 10 }} 
        />

      <Link to='../product/placeorder'>
      <Button
          variant="contained"
          color="primary"
          onClick={() => alert(`Placing order for ${selectedQuantity} item(s)!`)}
        >
          Place Order
        </Button>
        </Link>
      </Grid>
    </Grid>
    </>
  );

}

export default Order;
 
  
  