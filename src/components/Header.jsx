import React, { useContext } from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Badge,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

import CustomButton from "./CustomButton";

function Header() {
  const isMobile = useMediaQuery("(max-width:500px)");

  const navigateToCart = () => {
    // navigate("/cartInfo");
  };
  const navigateToHome = () => {
    // navigate("/");
  };

  const handleDownLoadCv = (event) => {
    // console.log(event.target.value);
    // searchProducts(event.target.value);
  };
  const headerText = "<SB/>";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "10px 20px",
        background: "rgb(255,255,240)",
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: "rgb(255, 92, 0)", fontWeight: "600" }}
      >
        {headerText}
      </Typography>

      {/* <div
          onClick={() => navigateToHome()}
          style={{
            display: "flex",
          
          
            background: "pink",
          
            paddingLeft: "0px",
            cursor: "pointer",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "rgb(2, 48, 32)", fontWeight: "600" }}
          >
            {headerText}
          </Typography>
        </div> */}

      {isMobile === true ? (
        <></>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "60px",
            padding: "0px 40px",
          }}
        >
          <Box
            component={Link}
            to="/"
            sx={{
              color: "black",
              textDecoration: "none", // Removes underline
              fontSize: "18px", // Changes font size
              "&:hover": {
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationColor: "rgb(255, 92, 0)",
                textDecorationThickness: "2px",
              },
            }}
          >
            Home
          </Box>

          <Box
            component={Link}
            to="/aboutPage"
            sx={{
              color: "black",
              textDecoration: "none", // Removes underline
              fontSize: "18px", // Changes font size
              "&:hover": {
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationColor: "rgb(255, 92, 0)",
                textDecorationThickness: "2px",
              },
            }}
          >
            About
          </Box>

          <Box
            component={Link}
            sx={{
              color: "black",
              cursor: "pointer",
              textDecoration: "none",
              fontSize: "18px",
              "&:hover": {
                textUnderlineOffset: "4px",
                textDecoration: "underline",
                textDecorationColor: "rgb(255, 92, 0)",
                textDecorationThickness: "2px",
              },
            }}
            to="/projectsPage"
          >
            Projects
          </Box>

          <Box
            component={Link}
            sx={{
              color: "black",
              cursor: "pointer",
              textDecoration: "none",
              fontSize: "18px",

              "&:hover": {
                textUnderlineOffset: "4px",
                textDecoration: "underline",
                textDecorationColor: "rgb(255, 92, 0)",
                textDecorationThickness: "2px",
              },
            }}
            to="/SolutionsPage"
          >
            Solutions
          </Box>

          <Box
            component={Link}
            sx={{
              color: "black",
              cursor: "pointer",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "400",
              "&:hover": {
                textUnderlineOffset: "4px",
                textDecoration: "underline",
                textDecorationColor: "rgb(255, 92, 0)",
                textDecorationThickness: "2px",
              },
            }}
            to="/contactPage"
          >
            Contact
          </Box>
          <CustomButton
            backGroundColor="rgb(255, 92, 0)"
            text="Download CV"
            onClick={handleDownLoadCv}
            textColor="white"
          />

          {/* <Button
              variant="outlined"
              sx={{
                marginLeft: "30px",
                background: "rgb(255, 92, 0)",
                color: "white",
                borderColor: "rgb(255, 92, 0)",
              }}
            >
              Download CV
            </Button> */}
        </Box>
      )}
    </Box>
  );
}

export default Header;
