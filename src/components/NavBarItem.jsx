import React from "react";
import { Box } from "@mui/material";
import { NabIndexContext } from "../context/NavContext";
import { useNavigate } from "react-router-dom";

function NavBarItem({ itemName, itemIndex, navigateTo }) {
  const { navIndex, setNavIndex } = React.useContext(NabIndexContext);
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default link behavior
    setNavIndex(itemIndex);
    navigate(navigateTo);
  };

  return (
    <Box
      component="button"
      onClick={handleClick}
      sx={{
        all: "unset", // Reset button styles
        color: "black",
        cursor: "pointer",
        textDecoration: navIndex === itemIndex ? "underline" : "none",
        fontSize: "16px",
        textUnderlineOffset: "4px",
        textDecorationColor: navIndex === itemIndex ? "red" : "transparent",
        textDecorationThickness: "2px",
        "&:hover": {
          textDecoration: "underline",
          textUnderlineOffset: "4px",
          textDecorationColor: "rgb(255, 92, 0)",
          textDecorationThickness: "2px",
        },
      }}
    >
      {itemName}
    </Box>
  );
}

export default NavBarItem;
