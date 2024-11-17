import React from 'react';
import {Box,Link} from "@mui/material";
import { NabIndexContext } from "../context/NavContext";


function NavBarItem({itemName, itemIndex,navigateTo}) {
    const { navIndex, setNavIndex } = React.useContext(NabIndexContext);
  return (
    <Box
    component={Link}
    href={navigateTo}
    onClick={() => setNavIndex({itemIndex})}
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
      textDecoration: navIndex === itemIndex ? "underline" : "none",
      textUnderlineOffset: "4px",
      textDecorationColor: "red",
      textDecorationThickness: "2px",
    }}
  >
    {itemName}
  </Box>
  )
}

export default NavBarItem