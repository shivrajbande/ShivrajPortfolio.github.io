import React, { useContext } from "react";
import { Box, Typography, useMediaQuery ,Button} from "@mui/material";
import { Link } from "react-router-dom";
import { NabIndexContext } from "../context/NavContext";

import CustomButton from "./CustomButton";
import LayoutConstants from "../constants/layout";

function Header() {
  const { navIndex, setNavIndex } = useContext(NabIndexContext);
  const isMobile = useMediaQuery("(max-width:500px)");
  const navigateToCart = () => {
    // navigate("/cartInfo");
  };
  const navigateToHome = () => {
    // navigate("/");
  };

  const handleDownLoadCv = (event) => {
    event.preventDefault();
    const link = document.createElement("a");
    link.href = `${process.env.PUBLIC_URL}/Shivraj_Resume.pdf`;
    link.download = "Shivraj_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const headerText = "<SB/>";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingY: "10px",

        paddingX: LayoutConstants.PAGE_HORIZONTAL_PADDING,
        background: "white",
      }}
    >
      <Typography
        variant="h6"
        sx={{ color: "rgb(255, 92, 0)", fontWeight: "600" }}
      >
        {headerText}
      </Typography>

      {isMobile === true ? (
        <></>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "60px",
          }}
        >
          <Box
            component={Link}
            to="/"
            onClick={() => setNavIndex(0)}
            sx={{
              color: "black",
              textDecoration: "none", // Removes underline
              fontSize: "16px", // Changes font size
              "&:hover": {
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationColor: "rgb(255, 92, 0)",
                textDecorationThickness: "2px",
              },
              textDecoration: navIndex === 0 ? "underline" : "none",
              textUnderlineOffset: "4px",
              textDecorationColor: "red",
              textDecorationThickness: "2px",
            }}
          >
            Home
          </Box>

          <Box
            component={Link}
            to="/About"
            onClick={() => setNavIndex(1)}
            sx={{
              color: "black",
              textDecoration: "none", // Removes underline
              fontSize: "16px", // Changes font size

              "&:hover": {
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                textDecorationColor: "rgb(255, 92, 0)",
                textDecorationThickness: "2px",
              },
              textDecoration: navIndex === 1 ? "underline" : "none",
              textUnderlineOffset: "4px",
              textDecorationColor: "red",
              textDecorationThickness: "2px",
            }}
          >
            About
          </Box>

          <Box
            component={Link}
            onClick={() => setNavIndex(2)}
            sx={{
              color: "black",
              cursor: "pointer",
              textDecoration: "none",
              fontSize: "16px",
              "&:hover": {
                textUnderlineOffset: "4px",
                textDecoration: "underline",
                textDecorationColor: "rgb(255, 92, 0)",
                textDecorationThickness: "2px",
              },
              textDecoration: navIndex === 2 ? "underline" : "none",
              textUnderlineOffset: "4px",
              textDecorationColor: "red",
              textDecorationThickness: "2px",
            }}
            to="/Projects"
          >
            Projects
          </Box>

          <Box
            component={Link}
            onClick={() => setNavIndex(3)}
            sx={{
              color: "black",
              cursor: "pointer",
              textDecoration: "none",
              fontSize: "16px",

              "&:hover": {
                textUnderlineOffset: "4px",
                textDecoration: "underline",
                textDecorationColor: "rgb(255, 92, 0)",
                textDecorationThickness: "2px",
              },
              textDecoration: navIndex === 3 ? "underline" : "none",
              textUnderlineOffset: "4px",
              textDecorationColor: "red",
              textDecorationThickness: "2px",
            }}
            to="/Solutions"
          >
            Solutions
          </Box>

          <Box
            component={Link}
            onClick={() => setNavIndex(4)}
            sx={{
              color: "black",
              cursor: "pointer",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "400",
              "&:hover": {
                textUnderlineOffset: "4px",
                textDecoration: "underline",
                textDecorationColor: "rgb(255, 92, 0)",
                textDecorationThickness: "2px",
              },
              textDecoration: navIndex === 4 ? "underline" : "none",
              textUnderlineOffset: "4px",
              textDecorationColor: "red",
              textDecorationThickness: "2px",
            }}
            to="/Blogs"
          >
            Blogs
          </Box>

          <Box
            component={Link}
            onClick={() => setNavIndex(5)}
            sx={{
              color: "black",
              cursor: "pointer",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "400",
              "&:hover": {
                textUnderlineOffset: "4px",
                textDecoration: "underline",
                textDecorationColor: "rgb(255, 92, 0)",
                textDecorationThickness: "2px",
              },
              textDecoration: navIndex === 5 ? "underline" : "none",
              textUnderlineOffset: "4px",

              textDecorationColor: "rgb(255, 92, 0)",
              textDecorationThickness: "2px",
            }}
            to="/Contact"
          >
            Contact
          </Box>

          <a
  href={`${process.env.PUBLIC_URL}/assets/Shivraj_Resume.pdf`}
  download="Shivraj_Resume.pdf"
>
  Download CV
</a>

          {/* <CustomButton
            backGroundColor="rgb(255, 92, 0)"
            text="Download CV"
            onClick={handleDownLoadCv}
            textColor="white"
          /> */}
        </Box>
      )}
    </Box>
  );
}

export default Header;
