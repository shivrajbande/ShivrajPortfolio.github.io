import React, { useEffect } from 'react';
import {Box,Link} from "@mui/material";
import { NabIndexContext } from "../context/NavContext";
import { useNavigate } from "react-router-dom";

function NavBarItem({ itemName, itemIndex, navigateTo }) {
  const { navIndex, setNavIndex } = React.useContext(NabIndexContext);
  const navigator = useNavigate();
  // console.log(navigateTo);

  const handleClick = ()=>{
    setNavIndex(itemIndex);
    navigator(navigateTo);
  } 

  return (
    <Box
      component={Link}
      href={navigateTo}
      onClick={handleClick}
      sx={{
        color: "black",
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


export default NavBarItem 