import React from "react";
import { Box, Typography, Link } from "@mui/material";

function FooterSectionCard({ text, SectionIcon, link }) {
  return<Box
  sx={{ display: "flex", marginBottom: "7px" }}
  component={Link}
  href={link}
  underline="none"
  color="black"
>
  <SectionIcon sx={{ marginRight: "8px" ,fontSize : "20px"}} />
  <Typography sx={{ fontSize: "14px" }}>{text}</Typography>
</Box>
}

export default FooterSectionCard;
