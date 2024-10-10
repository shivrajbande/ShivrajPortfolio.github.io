import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import Content from "../constants/content";
import LayoutConstants from "../constants/layout";

function AboutPage() {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          paddingX: LayoutConstants.PAGE_HORIZONTAL_PADDING,
        }}
      >
        <Box sx={{ backgroundColor: "rgb(255,255,240)" }}>
          <Typography sx={{ fontWeight: 600 }}>About Me</Typography>
          <Typography sx={{ whiteSpace: "normal" }}>
            {Content.AboutMeContent}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 600 }}>
            Experience and Expertise
          </Typography>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {Content.Expertise}
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: "rgb(255,255,240)" }}>
          <Typography sx={{ fontWeight: 600 }}>
            Entrepreneurial Journey
          </Typography>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {Content.Entrepreneur}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 600 }}>Vision & Values</Typography>
          <Typography sx={{ whiteSpace: "pre-line" }}>
            {Content.vision}
          </Typography>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default AboutPage;
