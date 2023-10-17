import React from "react";
import SignUp from "./form/signup";
import SignIn from "./form/signin";
import { Route, Routes } from "react-router-dom";
import Product from "./product/product";
import { useState } from "react";
import Order from "./order/order";
import Placeorder from "./product/placeorder";


function App() {
  const [product,setProduct  ]=useState({});
  function buy(item){
   setProduct(item);

  }
  
  return (
    <>
    <Routes>
      <Route path="/" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/product" element={<Product buy={buy}/>}/>
      <Route path="/order" element={<Order product={product}/>}/>    
      <Route path="/placeorder" element={<Placeorder order={Order}/>}/>  
      
    </Routes>
    
    </>
  );
}

export default App;





























