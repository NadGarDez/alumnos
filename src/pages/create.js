
import {useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/nav.js'

import {Typography, Table, TableBody, TableCell, TableHead, TableRow,IconButton, Box, Tooltip, Button,Grid, TextField,Paper } from '@mui/material';
import {Edit, Delete} from '@mui/icons-material';




function App() {

  let history = useNavigate();
  const [form, setForm] = useState(
    {
      nombre:"",
      nota1:0,
      nota2:0,
      nota3:0,
      nota4:0,
      promedio:0
    }
  )


  useEffect(
    ()=>{
      console.log(form.promedio);
    }
  )

  const calculateAverage = ()=>{
    let promedio = parseInt(form.nota1)+parseInt(form.nota2)+parseInt(form.nota3)+parseInt(form.nota4);
    console.log(promedio)
    promedio = promedio / 4;
    console.log(promedio)
    return promedio
  }
  return (
    <div className="App">
      <Nav/>
      <Box direction="column" sx={{height:"100%"}} p={5} >
      <Typography variant="h5" style={{flexGrow:1}}>
        Crear Alumno
      </Typography>
      </Box>
  <Paper elevation={3} sx={{width:"60%", margin:"auto"}} p={5}>
      <Grid container direction="column" justifyContent="center" alignItems="center" sx={{height:"100%"}} p={1} >
      <TextField

        sx={{width:"30%", margin:2}}
        autoFocus
        margin="dense"
        id="ETnombre"
        label="Nombre"
        type="email"
        size="small"
        inputProps={{ maxLength: 50 }}
        onChange = {
          (e)=>{
            setForm(
              {
                ...form,
                nombre:e.target.value
              }
            )
          }
        }
      />
      <TextField
        sx={{width:"30%",margin:2}}
        margin="dense"
        id="ETdescripcion"
        label="nota1"
        type="email"

        multiline
        size="small"
        value={form.nota1}
        maxRows={4}

        inputProps={{ maxLength: 3 }}
        onChange = {
          (e)=>{

            if (!isNaN(e.target.value) && e.target.value != "") {
              setForm(
                {
                  ...form,
                  nota1:e.target.value[0] == "0" ? e.target.value[1] : e.target.value,
                  promedio:calculateAverage()
                }
              )
            }
            if (e.target.value == "") {
              setForm(
                {
                  ...form,
                  nota1:0,
                  promedio:calculateAverage()
                }
              )
            }
          }
        }
      />
      <TextField
        sx={{width:"30%", margin:2}}
  size="small"
        margin="dense"
        id="ETresponsables"
        label="nota 2"
        type="email"

        multiline
        value={form.nota2}
        inputProps={{ maxLength: 3 }}
        maxRows={4}

        onChange = {
          (e)=>{

            if (!isNaN(e.target.value) && e.target.value != "") {
              setForm(
                {
                  ...form,
                  nota2:e.target.value[0] == "0" ? e.target.value[1] : e.target.value,
                  promedio:calculateAverage()
                }
              )
            }
            if (e.target.value == "") {
              setForm(
                {
                  ...form,
                  nota2:0,
                  promedio:calculateAverage()
                }
              )
            }
          }

        }
      />
      <TextField
        size="small"
        sx={{width:"30%", margin:2}}
        margin="dense"
        id="ETresponsables"
        label="nota 3"
        type="email"
        inputProps={{ maxLength: 3 }}
        multiline
  value={form.nota3}
        maxRows={4}

        onChange = {
          (e)=>{
            if (!isNaN(e.target.value) && e.target.value != "") {
              setForm(
                {
                  ...form,
                  nota3:e.target.value[0] == "0" ? e.target.value[1] : e.target.value,
                  promedio:calculateAverage()
                }
              )
            }
            if (e.target.value == "") {
              setForm(
                {
                  ...form,
                  nota3:0,
                  promedio:calculateAverage()
                }
              )
            }

          }
        }
      />
      <TextField
  size="small"
  sx={{width:"30%", margin:2}}
        margin="dense"
        id="ETresponsables"
        label="nota 4"
        type="email"
        inputProps={{ maxLength: 3 }}

        multiline
        value={form.nota4}

        maxRows={4}

        onChange = {
          (e)=>{
            if (!isNaN(e.target.value) && e.target.value != "") {
              setForm(
                {
                  ...form,
                  nota4:e.target.value[0] == "0" ? e.target.value[1] : e.target.value,
                  promedio:calculateAverage()
                }
              )
            }
            if (e.target.value == "") {
              setForm(
                {
                  ...form,
                  nota4:0,
                  promedio:calculateAverage()
                }
              )
            }

          }
        }
      />
      <Button variant="outlined"    size="small"
        onClick={
          async ()=>{
            
            if (form.nombre !== "" && form.nota1 !== "" && form.nota2 !== "" && form.nota3 !== "" && form.nota4 !== "") {

              const result = await axios.post(
                'http://localhost:7070/create',
                {form:form}
              );
              if (result.status == "200") {
                history("/");
              }
            }
          }
        }
      >
        Crear
        </Button>

      </Grid>
</Paper>

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
