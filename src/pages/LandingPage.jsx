import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  useMediaQuery,
  Grid2 as Grid,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import profileImage from "../assets/images/profile6.jpg";
import CustomButton from "../components/CustomButton";
import SkillSet from "../components/SkillSet";
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
    navigator("/About");
  };
  const isMobile = useMediaQuery("(max-width:500px)");
  return (
    <Box
      sx={
        {
          // paddingX: isMobile
          //   ? LayoutConstants.MOBILE_HORIZONTAL_PADDING
          //   : LayoutConstants.PAGE_HORIZONTAL_PADDING,
          // backgroundColor : "pink",
          // width : "550px"
        }
      }
    >
      <Header />
      <Grid
        container
        columns={12}
        // direction={isMobile ? "row" : "column"}
        spacing={2} // Add spacing between items
        direction={isMobile ? "column" : "row"} // Responsive direction
        alignItems="center"
      >
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={profileImage}
              alt="profile"
              height={"300px"}
              width={"auto"}
              style={{
                borderRadius: "0%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: isMobile ? "center" : "left",
            }}
          >
            <span>
              {isMobile ? (
                <></>
              ) : (
                <Typography sx={{ marginBottom: "2px" }}>
                  Hello, I am
                </Typography>
              )}
              <h2 style={{ margin: "0px" }}>Shivraj Bande</h2>
            </span>

            <Typography
              sx={{
                whiteSpace: "normal",
                marginBottom: "20px",
                marginTop: "4px",
              }}
              textAlign={isMobile ? "center" : "left"}
            >
              Passionate software developer with a knack for creating seamless
              user experiences and scalable solutions. I build intuitive web and
              mobile applications, leveraging the latest in technology to drive
              results. Let's bring your next idea to life!
            </Typography>

            <Box >
            <CustomButton
              backGroundColor="rgb(255, 92, 0)"
              text="About me"
              onClick={handleWorkButton}
              textColor="white"
            />
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ background: "rgb(255,255,240)" }}>
        <WorkApproachSteps />
      </Box>
      <Box sx={{ background: "white" }}>
        <h2 style={{ textAlign: "center" }}> Techincal Skills</h2>
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
