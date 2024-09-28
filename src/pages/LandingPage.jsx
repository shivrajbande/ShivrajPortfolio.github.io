import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import profileImage from "../assets/images/profile6.jpg";
import CustomButton from "../components/CustomButton";
import SkillSet from "../components/SkillSet";
import Experience from "../components/Experience";
import WorkApproachSteps from "../components/WorkApproach";

function LandingPage() {
  const handleWorkButton = () => {};
  return (
    <Box>
      <Header />

      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ background: "rgb(255,255,240)", padding: "10px" }}
      >
        <Box sx={{ display: "flex", flex: "1", justifyContent: "center" }}>
          <img
            src={profileImage}
            alt="profile"
            height={"350px"}
            width={"auto"}
            style={{
              padding: "10px",
              borderRadius: "0%",
              objectFit: "contain",
            }}
          />
        </Box>
        <Box sx={{ flex: "1" }}>
          <Typography>Hi, i am Shivraj Bande</Typography>
          <Typography sx={{ fontSize: "30px", fontWeight: "600" }}>
            Freelancer | Fullstack developer
          </Typography>

          <Typography sx={{ whiteSpace: "normal" }}>
            ewtghrth wthe rthtrehr wrhrth rthtrhtr werhewth ewrhweth rewwer
            erwewhwe werwertuyfqweryuf eriueg uihewriuh iheriohwqr iohqrerknqwor
            iuhqiwejbtfqw ihjbrgeqih
          </Typography>

          <CustomButton
            backGroundColor="rgb(255, 92, 0)"
            text="See my work"
            onClick={handleWorkButton}
            textColor="white"
          />
        </Box>
      </Box>

      <Typography
        sx={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}
      >
        Work approach steps
      </Typography>
      <WorkApproachSteps />

      <Box sx={{background: "rgb(255,255,240)"}}>
        <Typography
          sx={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}
        >
          Techincal Skills
        </Typography>
        <SkillSet />
        <Typography
          sx={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}
        >
          Work-Experience
        </Typography>
        <Experience />
      </Box>
      <Footer />
    </Box>
  );
}
export default LandingPage;
