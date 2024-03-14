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
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Modal from '@mui/material/Modal';
import Add from './Add';
import { useAppStore } from "../aapStore";
import Edit from './Edit';

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





export default function ProductList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
   const [formid,setFormid]=useState("");
  const [open, setOpen] = useState(false);
  const [editOpen,setEditOpen]=useState(false);
  const handleOpen = () => setOpen(true);
  const handleEditOpen =()=>setEditOpen(true);
  const handleClose = () => setOpen(false);
  const handleEditClose =()=>setEditOpen(false);
  const empCollectionRef = collection(db, "Products");
  const setRow=useAppStore((state)=>state.setRow);
  const row=useAppStore((state)=>state.row);
  
    
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRow(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    const userDoc = doc(db, "Products", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };

  const filterData = (v) => {
    if (v) {
      setRow([v]);
    } else {
      
      getUsers();
      setRow([]);
    }
  };
   const editData =(id,name,category,price,stock)=>{
       const data ={
        id:id,
        PName:name,
        Category:category,
        Price:price,
        Stock:stock
       };
       setFormid(data);
       handleEditOpen();
   };

  return (
   <>
    <div>
    
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Add closeEvent={handleClose}/>
      </Box>
    </Modal>
    <Modal
      open={editOpen}
     // onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Edit closeEvent={handleEditClose} fid={formid}/>
      </Box>
    </Modal>
  </div>

   
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
      
      <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
            Products List
          </Typography>
          <Divider/>

          <Box height={10} />
           
          <Stack direction="row" spacing={2} className="my-2 mb-2">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={row}
              sx={{ width: 300 }}
            onChange={(e, v) => filterData(v)}
              getOptionLabel={(row) => row.PName || ""}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Search Products" />
              )}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Button variant="contained" endIcon={<AddCircleIcon />} onClick={handleOpen}>
              Add
            </Button>
          </Stack>
          <Box height={10} />
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
                <TableCell
                  align="left"
                  style={{ minWidth: "100px", backgroundColor:"Black" ,color:"white"}}
                >
                   Product Name
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px", backgroundColor:"Black" ,color:"white"}}
                >
                   Category
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px" , backgroundColor:"Black" ,color:"white"}}
                >
                   Price
                </TableCell>
                <TableCell
                  align="left"
                  style={{ minWidth: "100px", backgroundColor:"Black" ,color:"white"}}
                >
                   Stock
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
                          {row.PName}
                        </TableCell>
                        <TableCell key={row.i} align="left">
                          {row.Category}
                        </TableCell>
                        <TableCell key={row.i} align="left">
                          {row.Price}
                        </TableCell>
                        <TableCell key={row.i} align="left">
                          {row.Stock}
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
                              // onClick={() => editUser(row.id)}
                              onClick={()=>{
                                editData(row.id,row.PName,row.Category,row.Price,row.Stock)
                              }}
                            />
                            <DeleteIcon
                              style={{
                                fontSize: "20px",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                deleteUser(row.id);
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
        rowsPerPageOptions={[10,15,25]}
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