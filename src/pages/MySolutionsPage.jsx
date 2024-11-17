import React from "react";
import { Box, Typography, Grid2 as Grid, useMediaQuery } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { entrepreneurMainContent } from "../constants/content";
import { Solutions } from "../constants/projects";
import SolutionCard from "../components/SolutionCard";
import changeImage from "../assets/images/change.jpg";
import LayoutConstants from "../constants/layout";

function MySolutionsPage() {
  const isMobile = useMediaQuery("(max-width:500px)");
  return (
    <Box>
      <Header />
      <Box>

        <Grid
          container
          columns={12}
          sx={{
            display: "flex",
            backgroundColor: "white",
            paddingX: isMobile
              ? LayoutConstants.MOBILE_HORIZONTAL_PADDING
              : LayoutConstants.PAGE_HORIZONTAL_PADDING,
            paddingY: "10px",
          }}
          // direction={index % 2 !== 0 ? "row-reverse" : "row"}
        >
          <Grid size={{ xs: 12, md: 6, lg: 6 }}>
            <Box
              display={"flex"}
              sx={{
                alignItems: "center",
                justifyContent : "center"
              }}
            >
              <img
                src={changeImage}
                alt="change"
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
                height: "100%",
              }}
            >
              <Typography
                sx={{ whiteSpace: "normal" }}
                textAlign={isMobile ? "center" : "left"}
              >
                {entrepreneurMainContent}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid container columns={12} rowSpacing={3}>
          {Solutions.map((section, index) => (
            <Grid
              container
              columns={12}
              sx={{
                display: "flex",
                backgroundColor: index % 2 !== 0 ? "white" : "rgb(255,255,240)",
                paddingX: isMobile
                  ? LayoutConstants.MOBILE_HORIZONTAL_PADDING
                  : LayoutConstants.PAGE_HORIZONTAL_PADDING,
                paddingY: "10px",
              }}
              direction={index % 2 === 0 ? "row-reverse" : "row"}
            >
              <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                <Box
                  display={"flex"}
                  sx={{
                    justifyContent: isMobile
                      ? "center"
                      : index % 2 === 0
                      ? "center"
                      : "start",
                    alignItems: "center",
                    // backgroundColor  :"red"
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
                    height: "100%",
                  }}
                >
                  <h2> {section.solutionName}</h2>
                  <Typography
                    sx={{ whiteSpace: "normal" }}
                    textAlign={isMobile ? "center" : "left"}
                  >
                    {section.description}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
}
export default MySolutionsPage;
