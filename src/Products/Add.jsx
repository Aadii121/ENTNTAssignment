import { useState,useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {Typography,Box} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import MenuItem from '@mui/material/MenuItem';
import { db } from "../firebase-config";
import { addDoc ,collection} from "firebase/firestore";
import Swal from "sweetalert2";
import { useAppStore } from "../aapStore";

const currencies = [
    {
      value: 'Mobile',
      label: 'Mobile',
    },
    {
      value: 'Laptop',
      label: 'Laptop',
    },
    {
      value: 'Tablet',
      label: 'Tablet',
    },
    {
      value: 'Headphone',
      label: 'Headphone',
    },
    {
        value: 'Electronic',
        label: 'Electronic',
      },
      {
        value: 'Watch',
        label: 'Watch',
      },
  ];
export default function Add({closeEvent}){
    
    const [name,setName]=useState("");
    const [category,setCategory]=useState("");
    const [price,setPrice]=useState(0);
    const [stock,setStock]=useState(0);
   
    const empCollectionRef = collection(db, "Products");
    const setRow=useAppStore((state)=>state.setRow);
    const handleNameChange =(event)=>{
         setName(event.target.value);
    }
    const handleCategoryChange =(event)=>{
        setCategory(event.target.value);
   }
   const handlePriceChange =(event)=>{
    setPrice(event.target.value);
   }
const handleStockChange =(event)=>{
    setStock(event.target.value);
   }


    const createUser=async()=>{
        await addDoc(empCollectionRef,{

            PName:name,
            Category:category,
            Price:Number(price),
            Stock:Number(stock),
        });
        getUsers();
        closeEvent();
        Swal.fire("Submitted","Your File Has been Submitted","success");
    };

    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRow(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

    return(
        <>
            <Box sx={{m:2}}/>
            <Typography variant="h5" align="center">
              Add Product
            </Typography>
            <IconButton style={{position:"absolute", top:"0",right:"0"}} onClick={closeEvent}>
              <CloseIcon/>
            </IconButton>
            <Box height={20}/>
            <Grid container spacing={2}>
              <Grid item xs={12}>
               <TextField id="outlined-basic" label="PName" variant="outlined" size="small " 
               sx={{minWidth:"100%"}} value={name} onChange={handleNameChange}/>
               </Grid> 
               <Grid item xs={6}>
               <TextField id="outlined-basic" label="Category" variant="outlined" size="small " 
               sx={{minWidth:"100%"}} value={category} onChange={handleCategoryChange} select>
                 {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
             
               </TextField>
               </Grid> 
               <Grid item xs={6}>
               <TextField id="outlined-basic" label="Price" variant="outlined" size="small " 
               sx={{minWidth:"100%"}} type="number" value={price} onChange={handlePriceChange}/>
               </Grid> 
               <Grid item xs={12}>
               <TextField id="outlined-basic" label="Stock" variant="outlined" size="small " 
               sx={{minWidth:"100%"}} type="number" value={stock} onChange={handleStockChange} />
            
               </Grid>
               <Grid item xs={12}>
                   <Typography varient="h5" align="center" >
                    <Button varient="contained" onClick={createUser} style={{backgroundColor:"blue", color:"white"}}>
                        Submit
                    </Button>
                   </Typography>
               </Grid>  
            </Grid>
            <Box sx={{m:4}}/>
        </>
    );
} 