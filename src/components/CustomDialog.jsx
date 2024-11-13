import React, { useState } from "react";
import {
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { Close } from "@mui/icons-material";
const ContributorSection = ({ contributorsList }) => {
  return<Box>
    {
    contributorsList.map((contributor) => (
      <Box display="flex">
        <Box
          sx={{
            borderRadius: "50%",
            padding: "10px",
            border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "10px",
            height: "10px",
            marginRight: "10px",
            backgroundColor: "background.default",
            color: "white",
          }}
        >
          <Typography fontSize={"12px"} sx={{ color: "black" }}>
            {contributor[0]}
          </Typography>
        </Box>
        <Typography>{contributor}</Typography>
      </Box>
    ))
    };
  </Box>;
};

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
      sx={{ padding: "100px", cursor: "pointer" }}
    >
      <DialogTitle>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            {projectMetaData.projectName}
          </Typography>
          <IconButton onClick={handleClose}>
            <Close color="black" />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <img
              src={projectMetaData.thumbnail}
              alt="Project"
              style={{ width: "300px", height: "300px", marginTop: "16px" }}
            />
          </Box>
          <Box sx={{ marginLeft: "30px" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "600", marginBottom: "10px" }}
            >
              Project Information
            </Typography>
            <Divider />
            <Card>
              <CardContent>
                <Typography>{projectMetaData.projectDescription}</Typography>
                <Typography
                  gutterBottom
                  sx={{ fontWeight: "500", marginTop: "10px" }}
                  component="div"
                >
                  Contributors
                </Typography>
                <ContributorSection
                  contributorsList={projectMetaData.projectContributors}
                />
              </CardContent>
            </Card>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
}
export default CustomDialog;
