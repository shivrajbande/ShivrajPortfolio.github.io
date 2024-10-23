import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { entrepreneurMainContent } from "../constants/content";
import { Solutions } from "../constants/projects";
import SolutionCard from "../components/SolutionCard";
import changeImage from "../assets/images/change.jpg";
import LayoutConstants from "../constants/layout";

function MySolutionsPage() {
  return (
    <Box>
      <Header />
      <Box >
        <Box
          sx={{
            width: "auto",
            height: "400px",
            display: "flex",
            alignItems: "center",
            backgroundColor  :"rgb(255,255,240)",
            padding: LayoutConstants.PAGE_HORIZONTAL_PADDING 
          }}
        >
          <Box sx={{ flex: "1" }}>
            <img
              src={changeImage}
              alt="change image"
              height={"300px"}
              width={"600px"}
            />
          </Box>
          <Typography sx={{ flex: "1" }}>{entrepreneurMainContent}</Typography>
        </Box>

        {Solutions.map((solution, index) => (
          <SolutionCard solution={solution} index={index} />
        ))}
      </Box>

      <Footer />
    </Box>
  );
}
export default MySolutionsPage;
