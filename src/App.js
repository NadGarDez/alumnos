import logo from './logo.svg';
import {useState,useEffect} from "react";
import './App.css';
import axios from 'axios';
import Nav from './components/nav.js'

import {Typography, Table, TableBody, TableCell, TableHead, TableRow,IconButton, Box, Tooltip, Button,Grid, TextField} from '@mui/material';
import {Edit, Delete} from '@mui/icons-material';





function App() {


  const [data,setData] = useState([]);
  const [first, setFirst] = useState(true);

  const [text, setText] = useState("");

  useEffect(
    async ()=>{
      console.log(data)
      if (first) {
        const result = await axios(
          'http://localhost:7070/list',
        );
        setData(result.data);

        setFirst(false);
      }



    }
  )

  return (
    <div className="App">
      <Nav/>
      <Grid container p={3} justifyContent="flex-end" sx={{width:"100%"}}>
        <Grid container lg={6} sm={6} md={6} item justifyContent="flex-start" alignItems="center" spacing={2}>
        <Grid item>
          <TextField variant="outlined" size="small" placeholder="nombre"

            onChange={
              (e)=>{
                if (e.target.value == "") {
                  setFirst(true)
                }
                else{
                  setText(e.target.value);
                }

              }
            }
          />
        </Grid>
        <Grid item>
          <Button variant="outlined"
            onClick={
             async ()=>{
                console.log("hey")
                const result = await axios(
                  `http://localhost:7070/find/${text}`,
                );
                console.log(result)
                setData(result.data);
              }
            }
           >
            Buscar
          </Button>
        </Grid>


        </Grid>
        <Grid container item  lg={6} sm={6} md={6} justifyContent="flex-end">

          <Button variant="outlined" href="/create">
            Nuevo Alumno
          </Button>
        </Grid>

      </Grid>
      <Box sx={{height:"100%"}} p={1}>
        <Table size="small" id="tasksList">
          <TableHead>
            <TableRow>
              <TableCell style={{fontSize:20}}>Nombre</TableCell>
              <TableCell style={{fontSize:20}}>Nota 1</TableCell>
              <TableCell style={{fontSize:20}}>Nota 2</TableCell>
              <TableCell style={{fontSize:20}}>Nota 3</TableCell>
              <TableCell style={{fontSize:20}}>Nota 4</TableCell>
                <TableCell style={{fontSize:20}}>Promedio</TableCell>
                <TableCell style={{fontSize:20}}>Creaacion</TableCell>
                <TableCell style={{fontSize:20}}>Accion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {
              data.length > 0 && (
                data.map(
                  item =>(
                    <TableRow >
                      <TableCell>{item.nombre}</TableCell>
                      <TableCell>{item.nota1}</TableCell>
                      <TableCell>{item.nota2}</TableCell>
                      <TableCell>{item.nota3}</TableCell>
                      <TableCell>{item.nota4}</TableCell>
                      <TableCell>{item.promedio}</TableCell>
                      <TableCell>{new Date(item.fecha_creacion).toLocaleString()}</TableCell>
                      <TableCell >
                      <Tooltip title="Editar">
                        <IconButton color="primary" name="edit"
                            href={`/edit/${item.id}`}
                        >

                          <Edit/>
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Eliminar">
                        <IconButton color="secondary" name="edit"

                        >

                          <Delete
                            onClick={
                              async ()=>{
                                console.log("hey")
                                const result = await axios.delete(
                                  `http://localhost:7070/delete/${item.id}`,
                                );
                                if (result.status == "200") {
                                  setFirst(true)
                                }
                              }
                            }
                          />
                        </IconButton>
                      </Tooltip>
                      </TableCell>
                    </TableRow>
                  )
                )

              )
            }



          </TableBody>
          </Table>
      </Box>

    </div>
  );
}

export default App;
//
// <Tooltip title="Editar">
//   <IconButton color="primary" name="edit"
//     onClick={
//       ()=>{
//         setDataEdit(item)
//         handleEDialog()
//       }
//     }
//   >
//
//     <Edit/>
//   </IconButton>
// </Tooltip>
// <Tooltip title="Eliminar">
//   <IconButton color="secondary" name="eliminar"
//     onClick={
//       ()=>{
//         deleteTask(item.id)
//       }
//     }
//   >
//
//     <Delete/>
//   </IconButton>
//
// </Tooltip>
// <Tooltip title="Culminar">
//   <IconButton style={{ color: "green" }} name="culminar"
//     onClick={
//       ()=>{
//         taskComplete(item.id)
//       }
//     }
//   >
//
//     <Check/>
//   </IconButton>
//
// </Tooltip>
