import React from "react";
import Sidenav from "../Components/Sidenav";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from "../Components/Navbar";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../Style/Dassb.css";
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CategoryIcon from '@mui/icons-material/Category';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PopularProduct from "./PopularProduct";
import BarChart from "../Charts/BarChart";
import CountUp from 'react-countup';



export default function DashBoard(){

    return (
        <>
        <div className="bgColor">
        <Navbar/>
        <Box height={70} />
        <Box sx={{ display: 'flex' }}>
        <Sidenav/>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>
        <Grid item xs={8}>
        <Stack spacing={2} direction={"row"}>
    <Card sx={{ minWidth: 49 + "%", height:130 }} className="gradient">
      <CardContent>
      <div className="iconstyle1">
         <Inventory2Icon/>
      </div>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"white",fontWeight:"bold",fontSize:"20px"}}>
        <CountUp delay={0.2} end={500} duration={0.6}/>K
        </Typography> 
        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
         Total No. Of Products
        </Typography> 
      </CardContent>
    </Card>

    <Card sx={{ minWidth: 49 + "%", height:130 }} className="gradientlite">
     
      <CardContent>
      <div className="iconstyle1">
      <ProductionQuantityLimitsIcon/>
      </div>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"white",fontWeight:"bold",fontSize:"20px"}}>
          <span><CountUp delay={0.2} end={200} duration={0.6}/>K</span>
        </Typography>
        <Typography gutterBottom variant="body2" component="div" sx={{color:"#ccd1d1"}}>
         Total No. Of Orders
        </Typography> 
      </CardContent>
      
    </Card>
         </Stack> 
        </Grid>
        <Grid item xs={4}>
        <Stack spacing={2} >
        <Card sx={{ maxWidth: 345 } } className="gradientlite">
     <Stack spacing={2} direction={"row"} >
     <div className="iconstyle">
      <CurrencyRupeeIcon />
      </div>
      <div className="paddingAll">
        <span className="pricetitle">Total Income</span>
        <br/>
        <span className="pricesubtitle">$<CountUp delay={0.2} end={800} duration={0.6}/>K</span>
      </div>
      </Stack>
     
   </Card>
   <Card sx={{ maxWidth: 345 }} className="gradient">
    
     <Stack spacing={2} direction={"row"} >
     <div className="iconstyle">
      <CategoryIcon />
      </div>
      <div className="paddingAll">
        <span className="pricetitle">Total Category</span>
        <br/>
        <span className="pricesubtitle"><CountUp delay={0.2} end={100} duration={0.6}/>K</span>
      </div>
      </Stack>
     
   </Card>
        </Stack>
        </Grid>
      </Grid>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={8}>
        <Card sx={{ height: 60 + "vh" }}>
        
            <CardContent>
            <BarChart/> 
            </CardContent>
  </Card>
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ height: 60 + "vh" }}>
        <div className="paddingAll">
        <span className="pricetitle">Popular Products</span>
        
      </div>
      <CardContent>
      <PopularProduct/>
      </CardContent>
        
  </Card>
        </Grid>
        
      </Grid>
      </Box>
        </Box>
        </div>
      
    </>
    )
}