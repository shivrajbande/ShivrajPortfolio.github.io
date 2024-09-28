// GlassCard.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const GlassCard = ({ logo, text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "140px",
        height: "55px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white
        backdropFilter: "blur(10px)", // Blur effect
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Shadow for depth
        border: "1px solid rgba(255, 255, 255, 0.18)", // Light border
      }}
    >
      <Box
        key={text}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center", padding : "10px" }}
      >
        <img
          src={logo}
          alt={text}
          style={{ width: "30px", height: "30px", marginRight: "10px" }}
        />
        <Typography variant="body1">{text}</Typography>
      </Box>
    </Box>
  );
};

export default GlassCard;
