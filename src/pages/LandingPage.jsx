import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import profileImage from "../assets/images/profile6.jpg";
import CustomButton from "../components/CustomButton";
import SkillSet from "../components/SkillSet";
import WorkApproachSteps from "../components/WorkApproach";
import LayoutConstants from "../constants/layout";
import { NabIndexContext } from "../context/NavContext";
function LandingPage() {
  const { navIndex, setNavIndex } = useContext(NabIndexContext);
  const roles = ["Software Developer", "Entrepreneur", "Freelancer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [role, setRole] = useState(roles[roleIndex]);
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
  //   }, 20000);

  //   // Update role based on index
  //   setRole(roles[roleIndex]);

  //   // Cleanup interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, [roleIndex, roles]);

  const handleWorkButton = () => {};
  return (
    <Box>
      <Header />

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          background: "rgb(255,255,240)",
          paddingX: LayoutConstants.PAGE_HORIZONTAL_PADDING,
        }}
      >
        <Box sx={{ display: "flex", flex: "1", justifyContent: "center" }}>
          <img
            src={profileImage}
            alt="profile"
            height={"auto"}
            width={"300px"}
            style={{
              padding: "10px",
              borderRadius: "0%",
              objectFit: "contain",
            }}
          />
        </Box>
        <Box sx={{ flex: "1" }}>
          <Typography>Hi, i am Shivraj Bande</Typography>
          <Typography
            sx={{
              fontSize: "30px",
              fontWeight: "600",
              // transition: "transform 0.5s ease",
              // transform: `translateX(10%)`,
              // display: "inline-block",
            }}
          >
            {role}
          </Typography>

          <Typography sx={{ whiteSpace: "normal", marginBottom: "20px" }}>
            With 2 years of experience and a proven track
            record of delivering high-quality user interfaces and robust code
            solutions. Proficient in web and mobile apps development.
            Experienced in fostering collaborative relationships across teams to
            achieve project objectives efficiently. Committed to keeping up with
            emerging technologies in software development.
          </Typography>

          <CustomButton
            backGroundColor="rgb(255, 92, 0)"
            text="About me"
            onClick={handleWorkButton}
            textColor="white"
          />
        </Box>
      </Box>

      <Box sx={{ background: "white" }}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "600",
            textAlign: "center",
            padding: "10px 0px",
          }}
        >
          Project Approach & Execution
        </Typography>
        <WorkApproachSteps />
      </Box>
      <Box sx={{ background: "rgb(255,255,240)" }}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "600",
            textAlign: "center",
            paddingTop: "20px",
          }}
        >
          Techincal Skills
        </Typography>
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
