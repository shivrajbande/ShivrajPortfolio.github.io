import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { entrepreneurMainContent } from "../constants/content";
import { Solutions } from "../constants/projects";
import SolutionCard from "../components/SolutionCard";

function MySolutionsPage() {
  return (
    <Box>
      <Header />
      <Box sx={{ width: "100%", height: "400px" }}>
        <img src="" alt="" />
        <Typography>{entrepreneurMainContent}</Typography>
      </Box>

      {Solutions.map((solution,index)=>(
        <SolutionCard solution = {solution} index = {index}/>
      ))}



      <Footer />
    </Box>
  );
}
export default MySolutionsPage;
