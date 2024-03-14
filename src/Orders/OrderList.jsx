import * as React from 'react';
import { useState,useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AddOrder } from './AddOrder';



const style = {
    position: 'absolute', 
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };




export default function OrderList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
   const [row,setData]=useState([]);

   useEffect(()=>{
    setData(AddOrder);
   },[])
    
  
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  
   
  return (
   <>
    
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
      
      <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
            Order List
          </Typography>
          <Divider/>

          <Box height={30} />
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
                <TableCell
                  align="left"
                  style={{ minWidth: "100px", backgroundColor:"Black" ,color:"white"}}
                >
                   Order Id
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px", backgroundColor:"Black" ,color:"white"}}
                >
                   Customer Name
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" , backgroundColor:"Black" ,color:"white"}}
                >
                   Order Date
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px", backgroundColor:"Black" ,color:"white"}}
                >
                   Status
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px", backgroundColor:"Black" ,color:"white"}}
                >
                   Action
                </TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {row
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row,i) => {
                return (
                  <TableRow  hover role="checkbox" tabIndex={-1} >
                    
                     
                        <TableCell key={row.i} align="left">
                          {row.id} 
                        </TableCell>
                        <TableCell key={row.i} align="left">
                          {row.name}
                        </TableCell>
                        <TableCell key={row.i} align="left">
                          {row.date}
                        </TableCell>
                        <TableCell key={row.i} align="left">
                          {row.Orderstat}
                        </TableCell>
                        <TableCell align="left">
                          <Stack spacing={2} direction="row">
                            <EditIcon
                              style={{
                                fontSize: "20px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              className="cursor-pointer"
                             
                            />
                            <DeleteIcon
                              style={{
                                fontSize: "20px",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                              
                            />
                          </Stack>
                        </TableCell>
                    
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10,15]}
        component="div"
        count={row.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}