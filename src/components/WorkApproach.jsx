import React from "react";
import { Box, Typography, useMediaQuery, Grid2 as Grid } from "@mui/material";
import LayoutConstants from "../constants/layout";
import { Person, Computer, GppGood, LocalShipping } from "@mui/icons-material";

function WorkApproachSteps() {
  const isMobile = useMediaQuery("(max-width:500px)");
  const servicePoints = [
    {
      title: "Client-Centered Approach",
      icon: Person,
      description:
        "I start by thoroughly understanding client requirements to ensure the final product aligns with their vision and goals.",
    },
    {
      title: "Scalable Development",
      icon: Computer,
      description:
        "I plan and implement solutions using clean, scalable code and appropriate technologies to meet both current and future needs.",
    },
    {
      title: "Quality Assurance",
      icon: GppGood,
      description:
        "I rigorously test the product to ensure high performance, reliability, and an optimal user experience.",
    },
    {
      title: "Efficient Delivery",
      icon: LocalShipping,
      description:
        "From initial development to deployment, I focus on delivering high-quality, scalable products on time, with ongoing monitoring and maintenance for long-term success.",
    },
  ];

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      gap={"10px"}
      flexDirection={"column"}
      alignItems={"center"}
      sx={{
        paddingX: isMobile
          ? LayoutConstants.MOBILE_HORIZONTAL_PADDING
          : LayoutConstants.PAGE_HORIZONTAL_PADDING,
        // backgroundColor : "pink",
        // width : "550px"
      }}
    >
      {/* <Box
        sx={{
          width: "50%",
          alignItems: "start",
          display: "flex",
          flexDirection: "column",
        }}
      >
       

        <Typography>
          My approach to projects is focused on understanding client needs,
          creating a clear plan, and delivering high-quality results through an
          agile development process. I emphasize user-centric design and
          iterative development to ensure flexibility and continuous
          improvement. From requirement gathering to deployment and post-launch
          support, I prioritize seamless execution and a smooth user experience.
        </Typography>
      </Box> */}
      <h2 style={{textAlign : "center"}}> Project Approach & Execution</h2>
      <Grid columns={12} rowSpacing={2} columnSpacing={2} container>
       <Box sx={{display : "flex",justifyContent: "space-between",flexDirection : isMobile?"column":"row",gap:2}}>
       {servicePoints.map((service, index) => (
          <Grid size = {{xs : 12,md:3,lg:3}}>
            <Box
              key={index}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"start"}
              alignItems={"start"}
              sx={{
                width: "auto",
                height: "200px",
                padding: "20px",
                boxSizing: "border-box",
                backgroundColor: "white",
                borderRadius: "20px",
                color: "black",
              }}
            >
              <Box
                sx={{
                  borderRadius: "100%",
                  border: "1px solid rgb(255, 92, 0)",
                  padding: "5px 8px",
                  background: "white",
                  marginBottom: "10px",
                }}
              >
                <service.icon />
              </Box>
              <h4 style={{ margin: "0px" }}>{service.title}</h4>
              <Typography
                sx={{ fontSize: "13px", textAlign: "start", marginTop: "10px" }}
              >
                {service.description}
              </Typography>
            </Box>
          </Grid>
        ))}
       </Box>
      </Grid>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "10px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      ></Box>
    </Box>
  );
}

export default WorkApproachSteps;
