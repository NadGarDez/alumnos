import React from "react"
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const component = () =>{


  return(
    <>
      <AppBar >
        <Toolbar>
          <Typography variant="h5" style={{flexGrow:1}}>
            {
              "Notas"
            }
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>

  )
}


export default component
