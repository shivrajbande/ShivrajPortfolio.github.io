import React from "react";
import { Box, Typography } from "@mui/material";

function WorkApproachSteps() {

  const servicePoints =  [
    {
      title: "Client-Centered Approach",
      icon: "https://img.icons8.com/ios-filled/50/000000/user.png",
      description: "I start by thoroughly understanding client requirements to ensure the final product aligns with their vision and goals.",
    },
    {
      title: "Scalable Development",
      icon: "https://img.icons8.com/ios-filled/50/000000/code.png",
      description: "I plan and implement solutions using clean, scalable code and appropriate technologies to meet both current and future needs.",
    },
    {
      title: "Quality Assurance",
      icon: "https://img.icons8.com/ios-filled/50/000000/checkmark.png",
      description: "I rigorously test the product to ensure high performance, reliability, and an optimal user experience.",
    },
    {
      title: "Efficient Delivery",
      icon: "https://img.icons8.com/ios-filled/50/000000/time.png",
      description: "From initial development to deployment, I focus on delivering high-quality, scalable products on time, with ongoing monitoring and maintenance for long-term success.",
    },
  ];
  
  return (
    <Box display={ "flex"} justifyContent={ "center"} gap={"10px"} sx={{padding:"20px 40px"}}>
      {servicePoints.map((service)=>(
        <Box flex={"1"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} sx={{background :"white"}}>
           <Box sx={{borderRadius : "100%", border:"1px solid rgb(255, 92, 0)", padding:"5px 8px", background:"white"}}><img src={service.icon} alt={service.title} width={"30px"} height={"auto"}/></Box>
           <Typography sx ={{fontSize:"14px", fontWeight : "600",margin : "10px 0px"}}>{service.title}</Typography>
           <Typography sx={{fontSize : "13px",textAlign:"center"}}>{service.description}</Typography>
        </Box>
      ))}
    </Box>
  );
}

export default WorkApproachSteps;
