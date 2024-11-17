import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Typography, Grid2 as Grid, useMediaQuery } from "@mui/material";
import { Sections } from "../constants/content";
import LayoutConstants from "../constants/layout";

function AboutPage() {
  const isMobile = useMediaQuery("(max-width:500px)");
  return (
    <Box>
      <Header />
      <Grid container columns={12}  rowSpacing={3}>
        {Sections.map((section, index) => (
          // <Box
          //   sx={{
          //     display: "flex",
          //     backgroundColor: index % 2 !== 0 ? "white" : "rgb(255,255,240)",
          //     height: "400px",
          //     maxWidth: "100vw",
          //     flexDirection: index % 2 === 0 ? "row-reverse" : "row",
          //     justifyContent: "space-between",
          //     paddingX: LayoutConstants.PAGE_HORIZONTAL_PADDING,
          //     paddingY: "20px",
          //     gap : index%2 === 0? "20px" : "0px"
          //   }}
          // >

          // </Box>
          <Grid
            container
            columns={12}
            sx={{
              display  : "flex",
              backgroundColor: index % 2 === 0 ? "white" : "rgb(255,255,240)",
              paddingX: isMobile
                ? LayoutConstants.MOBILE_HORIZONTAL_PADDING
                : LayoutConstants.PAGE_HORIZONTAL_PADDING,
              paddingY: "10px",
            }}
            direction={index % 2 !== 0 ? "row-reverse" : "row"}
          >
            <Grid size={{ xs: 12, md: 6, lg: 6 }}>
              <Box
                display={"flex"}
                sx={{
                  justifyContent: isMobile ? "center" : index %2===0? "start" : "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={section.image}
                  alt="about me"
                  width={"auto"}
                  height={isMobile ? "200px" : "350px"}
                  style={{
                    objectFit: "contain",
                    borderRadius: isMobile ? "50%" : "0%",
                  }}
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6, lg: 6 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: isMobile ? "center" : "center",
                  alignItems: isMobile ? "center" : "start",
                 height : "100%"
                }}
              >
                <h2> {section.sectionName}</h2>
                <Typography
                  sx={{ whiteSpace: "normal" }}
                  textAlign={isMobile ? "center" : "left"}
                >
                  {section.text}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          // <Grid size={{ xs: 12, md: 12, lg: 12 }}>

          //   <Box
          //     sx={{
          //       display: "flex",
          //       flexDirection: "column",
          //       width: "100%",
          //       alignItems: "center",
          //       justifyContent: "center",
          //     }}
          //   >
          //     <img
          //       src={section.image}
          //       alt="about me"
          //       width={"auto"}
          //       height={"200px"}
          //       style={{ objectFit: "contain", borderRadius: "50%" }}
          //     />

          //   </Box>
          // </Grid>
        ))}
      </Grid>

      <Footer />
    </Box>
  );
}

export default AboutPage;
