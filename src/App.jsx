import React from 'react'
import './App.css'
import Sidenav from './Components/Sidenav'
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import DashBoard from './Pages/DashBoard';
import ProductManagement from './Pages/ProductManagement';
import Order from './Pages/Order';


function App() {
 

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<DashBoard/>}></Route>
          <Route path="/Product" exact element={<ProductManagement/>}></Route>
          <Route path="/Order" exact element={<Order/>}></Route>
          
        </Routes>
       </BrowserRouter>
      
    </>
  )
}

export default App
