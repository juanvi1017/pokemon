import React from "react";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AppBar, Button, Dialog } from "@mui/material";

// styles
import './style.css';

const modal = ({ title, title_accion, accion, open, setOpen, size, children }) => {
  const CrearAccion = () => {
    const resp = accion ? (
      <Button style={{ color: "black" }} onClick={accion.bind(this, false)}>
        {" "}
        {title_accion}{" "}
      </Button>
    ) : (
      ""
    );
    return resp;
  };

  return (
    <AppBar className="appBar" elevation={0}>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth={size}
      >
        <Toolbar>
          <Typography variant="h6" className="appBarTitle">
            {title}
          </Typography>
          {CrearAccion()}
        </Toolbar>
        {children}
      </Dialog>
    </AppBar>
  );
}

export default modal;
