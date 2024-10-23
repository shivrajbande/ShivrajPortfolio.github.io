import { Box, Typography } from "@mui/material";
import React from "react";
import LayoutConstants from "../constants/layout";

function SolutionCard({ solution, index }) {
  return (
    <Box
      sx={{
        backgroundColor: index % 2 === 0 ? "white" : "rgb(255,255,240)",
        width: "100%",
        height: "500px",
        display: "flex",
        maxWidth : "100vw",
        flexDirection: index % 2 === 0 ? "row" : "row-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        gap : "10px",
        boxSizing: "border-box",
        padding: LayoutConstants.PAGE_HORIZONTAL_PADDING 
      
      }}
    >
      <Box sx={{width : "45vw", display : "flex",justifyContent : "start",flexDirection : "column" }}>
        <h2>{solution.solutionName}</h2>
        <Typography>{solution.description}</Typography>
      </Box>
      <Box
      sx={{width : "45vw", display : "flex",justifyContent : index % 2 === 0 ? "end" : "start"}}
      ><img src={solution.image} alt="" style={{height : "400px",objectFit: "contain",maxWidth: "100%",}}/></Box>
    </Box>
  );
}

export default SolutionCard;
