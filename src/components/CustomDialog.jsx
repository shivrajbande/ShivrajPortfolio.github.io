import React, { useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function CustomDialog({ projectMetaData }) {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen
      sx={{ padding: "80px" }}
    >
      <DialogTitle>{projectMetaData.projectName}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex",alignItems : "center" }}>
         <Box sx={{width : "50%"}}> <Typography>{projectMetaData.projectDescription}</Typography></Box>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCnjtYHR-JqDzR0UHJduZ_pHI9LveRmtYug&s"
            alt="Project"
            style={{ width: "300px", height: "300px", marginTop: "16px" }}
          />
        </Box>
        <Box><img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCnjtYHR-JqDzR0UHJduZ_pHI9LveRmtYug&s"
            alt="Project"
            style={{ width: "300px", height: "300px", marginTop: "16px" }}
          /></Box>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}
export default CustomDialog;
