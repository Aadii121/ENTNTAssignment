import React from "react";
import Sidenav from "../Components/Sidenav";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from "../Components/Navbar";
import ProductList from "../Products/ProductList";
export default function ProductManagement(){

    return (
        <>
        <Navbar/>
        <Box height={70} />
        <Box sx={{ display: 'flex' }}>
        <Sidenav/>
            
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            
            <ProductList/>
        
      </Box>
        </Box>
           
        </>
    )
}