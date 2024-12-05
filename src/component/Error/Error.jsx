import React from 'react';
import { Button } from '@mui/material';
import Grid  from '@mui/material/Grid2';
import ImageError from '../../assets/images/error.png';
import './Error.css'


const Error = () => {

  return (
    <Grid container spacing={1} className="sectionContainer" justifyContent="center" textAlign='center'>
      <Grid sx={{ xs: 12, md: 8}}>
        <div className="sectionImage">
          <img src={ImageError} alt="imagen de error" />
        </div>
        <div className="sectionNotification">
          Ooops. ocurrio un error
        </div>
        <div className="sectionMsg">
          La pagina que buscas no existe
        </div>
        <div className="sectionButton">
          <Button
            variant="contained"
            className='createButton'
            onClick={() => (window.location.href = "/")}>
            Recargar {" "}
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Error;
