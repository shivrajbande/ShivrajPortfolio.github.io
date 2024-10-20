import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import {Sections} from "../constants/content";
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
        {Sections.map((section, index) => (
          <Box
            sx={{
              display: "flex",
              backgroundColor: index % 2 !== 0 ? "white" : "rgb(255,255,240)",
              height: "400px",
              width: "100%",
              flexDirection: index % 2 === 0 ? "row-reverse" : "row",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontWeight: 600, fontSize: "28px" }}>
                {section.sectionName}
              </Typography>
              <Typography sx={{ whiteSpace: "normal", fontSize: "18px" }}>
                {section.text}
              </Typography>
            </Box>
            <Box sx={{}}>
              <img
                src={section.image}
                alt="about me"
                width={index === 0 ? "200px" : "auto"}
                height={index === 0 ? "300px" : "400px"}
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Box>
        ))}
      </Box>

      <Footer />
    </Box>
  );
}

export default AboutPage;
