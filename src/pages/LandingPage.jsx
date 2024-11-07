import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import profileImage from "../assets/images/profile6.jpg";
import CustomButton from "../components/CustomButton";
import SkillSet from "../components/SkillSet";
import Experience from "../components/Experience";
import WorkApproachSteps from "../components/WorkApproach";
import LayoutConstants from "../constants/layout";
import { NabIndexContext } from "../context/NavContext";
import { useNavigate } from "react-router-dom";
function LandingPage() {
  const { navIndex, setNavIndex } = useContext(NabIndexContext);
  const roles = ["Software Developer", "Entrepreneur", "Freelancer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [role, setRole] = useState(roles[roleIndex]);
  const navigator = useNavigate();

  const handleWorkButton = () => {
    navigator("/About")
  };
  return (
    <Box>
      <Header />

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          background: "white",
          paddingX: LayoutConstants.PAGE_HORIZONTAL_PADDING,
          paddingBottom : "40px",
        }}
      >
        <Box sx={{ display: "flex", flex: "1", justifyContent: "center" }}>
          <img
            src={profileImage}
            alt="profile"
            height={"auto"}
            width={"300px"} 
            style={{
              borderRadius: "0%",
              objectFit: "contain",
            }}
          />
        </Box>
        <Box sx={{ flex: "1" }}>
       <span>   <Typography sx={{marginBottom : "2px"}}>Hello, I am</Typography>
          <h2 style={{margin : "0px"}}>Shivraj Bande</h2>
          </span>

          <Typography sx={{ whiteSpace: "normal", marginBottom: "20px",marginTop : "4px" }}>
          A passionate software developer with a knack for creating seamless user experiences and scalable solutions. I build intuitive web and mobile applications, leveraging the latest in technology to drive results. Let's bring your next idea to life!
          </Typography>

          <CustomButton
            backGroundColor="rgb(255, 92, 0)"
            text="About me"
            onClick={handleWorkButton}
            textColor="white"
          />
        </Box>
      </Box>

      <Box sx={{ background: "rgb(255,255,240)" }}>
        <WorkApproachSteps />
      </Box>
      <Box sx={{ background: "white" }}>
       <h2 style={{textAlign : "center"}}> Techincal Skills</h2>
        <SkillSet />
        {/* <Typography
          sx={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}
        >
          Work-Experience
        </Typography>
        <Experience /> */}
      </Box>
      <Footer />
    </Box>
  );
}
export default LandingPage;
