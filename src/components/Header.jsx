import React, { useContext } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  Button,
  Grid2 as Grid,
  Stack,
  IconButton,
  Drawer,
  Link,
} from "@mui/material";

import { NabIndexContext } from "../context/NavContext";
import NavBarItem from "../components/NavBarItem";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  Close,
  Home,
  Person,
  Code,
  TipsAndUpdates,
  AutoStories,
  ContactPage,
} from "@mui/icons-material";

import CustomButton from "./CustomButton";
import LayoutConstants from "../constants/layout";

function Header() {
  const [isOpened, setIsOpened] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsOpened(true);
  };

  const handleClose = () => {
    setIsOpened(false);
  };

  const headerText = "<SB/>";
  const isMobile = useMediaQuery("(max-width:500px)");

  const navItems = [
    {
      navName: "Home",
      Icon: Home,
      navigate: "/",
      index: 0,
    },
    {
      navName: "About",
      Icon: Person,
      navigate: "/About",
      index: 1,
    },
    {
      navName: "Projects",
      Icon: Code,
      navigate: "/Projects",
      index: 2,
    },
    {
      navName: "Solutions",
      Icon: TipsAndUpdates,
      navigate: "/Solutions",
      index: 3,
    },
    {
      navName: "Blogs",
      Icon: AutoStories,
      navigate: "/Blogs",
      index: 4,
    },
    {
      navName: "Contact",
      Icon: ContactPage,
      navigate: "/Contact",
      index: 5,
    },
  ];
  const { navIndex, setNavIndex } = React.useContext(NabIndexContext);
  const navigator = useNavigate();

  return (
    <Grid
      container
      columns={12}
      sx={{
        marginY: "10px",
        paddingX: isMobile
          ? LayoutConstants.MOBILE_HORIZONTAL_PADDING
          : LayoutConstants.PAGE_HORIZONTAL_PADDING,
      }}
    >
      {/* Site Branding (SB) */}
      <Grid size={{ xs: 4, md: 2 }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          sx={{ height: "100%" }}
        >
          <Typography
            variant="h6"
            textAlign="start"
            sx={{ color: "rgb(255, 92, 0)", fontWeight: "600" }}
          >
            {headerText}
          </Typography>
        </Box>
      </Grid>
      {isMobile ? (
        <Grid size={{ xs: 8, md: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            {!isOpened && ( // Conditionally render the Menu button
              <IconButton onClick={handleDrawerOpen}>
                <Menu />
              </IconButton>
            )}
            <Drawer
              open={isOpened}
              onClose={handleClose} // Close Drawer
              variant="temporary"
              anchor={"right"}
            >
              <Box sx={{ width: 250 }}>
                {/* <Typography variant="h6" sx={{ p: 2 }}>
                  Drawer Content
                </Typography>
                <Button onClick={handleClose} sx={{ ml: 2 }}>
                  Close Drawer
                </Button> */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "end",
                    marginTop: "15px",
                    paddingRight: "15px",
                  }}
                >
                 
                  <IconButton onClick={() => handleClose()}>
                    <Close />
                  </IconButton>
                </Box>
                {navItems.map((item, key) => (
                  <Box
                    key={key}
                    display={"flex"}
                    component={Link}
                    to={item.navigate}
                    sx={{
                      textDecoration: "none",
                      color: "black",
                      justifyContent: "start",
                      paddingX: "10px",
                      marginY: "18px",
                      alignItems: "center",
                    }}
                    onClick={() => {
                      
                      setNavIndex(item.index);
                      navigator(item.navigate);
                      handleClose();
                    }}
                  >
                    <IconButton
                      sx={{ padding: "0px", marginRight: "20px" }}
                      onClick={() => setNavIndex(item.index)}
                    >
                      {<item.Icon />}
                    </IconButton>
                    <Typography sx={{ fontSize: "18px" }}>
                      {item.navName}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Drawer>
          </Box>
        </Grid>
      ) : (
        <Grid
          size={{ xs: 8, md: 10 }}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 3,
          }}
        >
          {/* Navigation Items */}
          <Box sx={{ display: "flex", gap: 6 }}>
            <NavBarItem itemName={"Home"} itemIndex={0} navigateTo={"/"} />
            <NavBarItem
              itemName={"About"}
              itemIndex={1}
              navigateTo={"/About"}
            />
            <NavBarItem
              itemName={"Projects"}
              itemIndex={2}
              navigateTo={"/Projects"}
            />
            <NavBarItem
              itemName={"Solutions"}
              itemIndex={3}
              navigateTo={"/Solutions"}
            />
            <NavBarItem
              itemName={"Blogs"}
              itemIndex={4}
              navigateTo={"/Blogs"}
            />
            <NavBarItem
              itemName={"Contact"}
              itemIndex={5}
              navigateTo={"/Contact"}
            />
          </Box>

          {/* Download CV Button */}
          <a
            href="/assets/resume.pdf"
            download="example.pdf"
            style={{
              borderRadius: "4px",
              background: "rgb(255, 92, 0)",
              color: "white",
              borderColor: "transparent",
              padding: "8px 15px",
              textDecoration: "none",
            }}
          >
            Download CV
          </a>
        </Grid>
      )}
    </Grid>
  );
}

export default Header;
