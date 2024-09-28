import React from "react";
import { Box, Typography } from "@mui/material";

const ExperienceContainer = ({ title, subtitle }) => (
  <Box>
    <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
      {title}
    </Typography>
    <Typography>{subtitle}</Typography>
  </Box>
);

function Experience() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "auto",
        height: "100px",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "10px",
        margin : "0px 30px",
        padding : "0px 30px",
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white
        backdropFilter: "blur(10px)", // Blur effect
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Shadow for depth
        border: "1px solid rgba(255, 255, 255, 0.18)", // Light border
      }}
    >
      <ExperienceContainer title={"2 years"} subtitle={"Experience"} />
      <ExperienceContainer title={"12+"} subtitle={"Mobile Applications"} />
      <ExperienceContainer title={"6+"} subtitle={"Web Applications"} />
      <ExperienceContainer title={"4+"} subtitle={"Solutions"} />
    </Box>
  );
}

export default Experience;
