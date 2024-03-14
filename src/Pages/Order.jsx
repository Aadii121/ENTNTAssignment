import React from "react";
import Sidenav from "../Components/Sidenav";
import Box from '@mui/material/Box';

import Navbar from "../Components/Navbar";
import OrderList from "../Orders/OrderList";
export default function Order(){

    return (
        <>
        <Navbar/>
        <Box height={80} />
        <Box sx={{ display: 'flex' }}>
        <Sidenav/>
           
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <OrderList />
      </Box>
        </Box>
           
        </>
    )
}