// import React, { useEffect, useState } from 'react'
// import Header from './pheader'
// import {ValidatorForm, TextValidator} from 'react';
// import Box from '@mui/material/Box';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// // import axios from 'axios'
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';


// import Alert from '@mui/material/Alert';
// import IconButton from '@mui/material/IconButton';
// import Collapse from '@mui/material/Collapse';
// import CloseIcon from '@mui/icons-material/Close';
// import { useNavigate } from 'react-router-dom';



// export default function  placeorder (props) {
//   const data = new FormData(event.currentTarget);
    
 

//   //   const handleChange = (event) => {
//   //   setSelectAddress(event.target.value)
//   //   setStepCount(2)
//   // };
//   const [list,setList] =useState([])
//   async function productlist() {
//    await fetch ('http://localhost:3001/api/v1/products', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
        
//       })
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           setList(data)
//         })
//         .catch(error => {
//           console.log(error);
//         });
      
//  } 

 
//   async function GetAddress() {
//    await fetch ('http://localhost:3001/api/v1/addresses', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
        
//       })
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);
//           setList(data)
//         })
//         .catch(error => {
//           console.log(error);
//         });
      
//  }
 
//  useEffect(()=>{
//     productlist();
//  },[])

//   useEffect(()=>{
//     GetAddress()
//   },[Open])


//     const steps = [
//         'Items',
//         'Select Address',
//         'Confirm Order',
//       ];

//     if(StepCount === 0){
//       list.map((item)=>{
//         return (
//             <>
//             <Header/>
//             <div className='relative top-[30px]'>
//             <Box sx={{ width: '100%' }}>
//               <Stepper activeStep={StepCount} alternativeLabel>
//                 {steps.map((label) => (
//                   <Step key={label}>
//                     <StepLabel>{label}</StepLabel>
//                   </Step>
//                 ))}
//               </Stepper>
//             </Box>
//             </div>
//             <div className=' flex justify-center relative top-[100px]'> 
//             <div className=' max-w-[60%] gap-5 flex '>
//                 <img className=' h-[250px] w-[250px]' src={item.imageURL}></img>
//                 <div>
//                     <div>
//                         <h1>{item.name}</h1>
//                     </div>
//                     <h3>Category <span >{item.category}</span></h3>
//                     <h3>Quantity <span>{quantity}</span></h3>
//                     <p >{prod.description}</p>
//                     <h1 >Total Price : ₹{quantity * prod.price}</h1>
//                     <Button onClick={()=>{
//                         navigate(back)
//                     }} style={{backgroundColor : "#3f51b5"}}  variant="contained">BACK</Button>
//                     <Button onClick={()=>{
//                         setStepCount(1)
//                     }} style={{backgroundColor : "#3f51b5"}}  variant="contained">NEXT</Button>
//                 </div>
//             </div>
//             </div>
//             </>
//           )
//       }  
//       )}

//     else if(StepCount===1){ 
//       list.map((item)=>{
//         return (
//         <>
//         <Header/>
//         <div className='fixed top-[22%] left-[78%] w-[100%]'>
//        <Box sx={{ width: '20%' }}>
//        <Collapse in={Open}>
//         <Alert 
//         onClose={() => {
//             setOpen(false)
//           }}
//         variant='filled'
//           action={
//             <IconButton
//               aria-label="close"
//               color="inherit"
//               size="small"
//             >
//               <CloseIcon fontSize="inherit" />
//             </IconButton>
//           }
//           sx={{ mb: 2 }}
//         >
//           Address added successfully
//         </Alert>
//       </Collapse>
//     </Box>
//     </div>

//         <div className=' w-screen flex flex-col justify-center items-center relative top-[30px]'>
//         {/* <Box sx={{ width: '100%' }}> */}
          
//     <div  className=' mt-10 min-w-[50%] '>
//     <InputLabel id="demo-simple-select-label">Select Address</InputLabel>
    
    
//     <Select
//       labelId="demo-simple-select-label"
//       className='w-[100%]'
//       id="demo-simple-select"
//       value={SelectAddress}
//       label="Select Address"
//       onChange={handleChange}
//       >
      
//         {
//           // AddList.map((item,index)=>{
//           //     return <MenuItem value={index}>{item.Name}, {item.State}, {item.City}</MenuItem>
//           //   })
//         }
//     </Select>
//     </div>
//     </div> 

//     <div className=' relative top-6 items-center justify-center flex flex-col'>
//         <h1 className=' text-[24px]'>-or-</h1>
//         <h1 className=' text-[32px] mt-5'>Add Address</h1>
//         {/* <ValidatorForm onSubmit={()=>{
//                     const data = {name,contactNumber,city,zipCode,landmark,state,treet}
//                     props.postAdd(data)
//                     setTimeout(() => {
//                       setOpen(true)
//                     }, 200);
//                     setTimeout(() => {
//                       setOpen(false)
//                     }, 2000); */}
//                 {/* }} className=' items-center justify-center flex flex-col min-w-[30%] gap-5'> */}
//                 let objup = {
//     "firstName": data.get('name'),
//     "lastName": data.get('lastName'),
   
   
//     "contactNumber": data.get('phonenumber')
  
//   }
//                     <Typography className="pname" gutterBottom variant="h5" component="div">
//                          {item.name}
//                         </Typography>
//                         <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="name"
//                   label="naem"
//                   type="text"
//                   id="name"
                  
//                 />
//               </Grid>
//               <Typography className="city" gutterBottom variant="h5" component="div">
//                          {item.city}
//                         </Typography>
//                         <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="name"
//                   label="naem"
//                   type="text"
//                   id="name"
                  
//                 />
//               </Grid>00px]'
//                     >
//                     </TextValidator>
//                     <TextValidator
//                     label="Pincode"
//                     value={ZipCode}
//                     onChange={(e)=>{setzipCode(e.target.value)}}
//                     validators={["required"]}
//                     errorMessages={["Pincode can't be empty"]}
//                     className=' w-[500px]'
//                     >
//                     </TextValidator>  
//                     <TextValidator
//                     label="Landmark"
//                     value={Landmark}
//                     onChange={(e)=>{setLandmark(e.target.value)}}
//                     className=' w-[500px]'
//                     >
//                     </TextValidator>
//                     <TextValidator
//                     label="State"
//                     value={State}
//                     onChange={(e)=>{setState(e.target.value)}}
//                     validators={["required"]}
//                     errorMessages={["State can't be empty"]}
//                     className=' w-[500px]'
//                     >
//                     </TextValidator>
//                     <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
                    

//                     <Button type='submit' style={{backgroundColor : "#3f51b5"}}  className=' w-[100%] relative top-3' variant="contained">Set Address</Button> <br/>
                
//                 {/* </ValidatorForm> */}
//     </div>
        
//     </>
//       )
//     }
//       )}

//     else if(StepCount === 2){
//       list.map((item)=>{
//         return(
//             <>
//             <Header/>
//             <div className=' w-screen flex flex-col justify-center items-center relative top-[30px]'>
//         <Box sx={{ width: '100%' }}>
//           <Stepper activeStep={StepCount} alternativeLabel>
//             {steps.map((label) => (
//               <Step key={label}>
//                 <StepLabel>{label}</StepLabel>
//               </Step>
//             ))}
//           </Stepper>
//         </Box>
//             </div> 

//             <div className='fixed top-[22%] left-[78%] w-[100%]'>
//        <Box sx={{ width: '20%' }}>
//        <Collapse in={ConfirmOrder}>
//         <Alert 
//         onClick={() => {
//             setConfirmOrder(false)
//           }}
//         variant='filled'
//           action={
//             <IconButton
//               aria-label="close"
//               color="inherit"
//               size="small"
//             >
//               <CloseIcon fontSize="inherit" />
//             </IconButton>
//           }
//           sx={{ mb: 2 }}
//         >
//           Order confirmed successfully
//         </Alert>
//       </Collapse>
//     </Box>
//     </div>


//      <div className=' p-5 flex relative gap-3 top-[70px] left-[50%] -translate-x-[50%] rounded-3xl hover:shadow-2xl shadow-xl w-[800px]'>
//         <div className='w-[70%] flex items-start gap-5 flex-col'>
//           <h1 className='text-[28px]'>{item.name}</h1>
//           <h3 className=''> Quantity <span className='font-bold'>{quantity}</span></h3>
//           <h3> Category <span className='font-bold'>{prod.category}</span></h3>
//           <p className=' overflow-hidden mt-2 text-[14px] min-h-[80px] max-h-[80px] '>{prod.description}</p>
//           <h1 className=' text-red-600 text-[24px]'>Total Price :₹ {prod.price * quantity}</h1>
//         </div>
//         <div className=' bg-gray-700 w-[1px]'></div>
//         <div className='flex flex-col gap-3 items-start'>
//           <h1 className='text-[28px]'>Address Details</h1>
//           <h3>{item.name}</h3>
//           <h3>{item.contactNumber}</h3>
//           <h3>{item.city}</h3>
//           <h3>{item.state}</h3>
//         </div>
//       </div>
//      <div className=' absolute top-[80%] left-[50%] -translate-x-[50%]'>
//         <Button onClick={()=>{
//             setConfirmOrder(true)
//             setTimeout(() => {
//               navigate('../order/order')
//             }, 1500);
//           }} variant='contained' style={{backgroundColor : "#3f51b5"}} color="info">Place order</Button>
//         </div>
       
//         </>
//         )
//     }
//     )}
//     }
    
