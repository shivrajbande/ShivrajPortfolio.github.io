import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Typography } from "@mui/material";
import { Sections } from "../constants/content";
import LayoutConstants from "../constants/layout";

function AboutPage() {
  return (
    <Box>
      <Header />
      <Box>
        {Sections.map((section, index) => (
          <Box
            sx={{
              display: "flex",
              backgroundColor: index % 2 !== 0 ? "white" : "rgb(255,255,240)",
              height: "400px",
              maxWidth: "100vw",
              flexDirection: index % 2 === 0 ? "row-reverse" : "row",
              justifyContent: "space-between",
              paddingX: LayoutConstants.PAGE_HORIZONTAL_PADDING,
              paddingY: "20px",
              gap : index%2 === 0? "20px" : "0px"
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
              <h2> {section.sectionName}</h2>
              <Typography sx={{ whiteSpace: "normal" }}>
                {section.text}
              </Typography>
            </Box>
            <Box sx={{}}>
              <img
                src={section.image}
                alt="about me"
                width={"auto"}
                height={"350px"}
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
