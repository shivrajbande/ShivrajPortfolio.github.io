import React from "react";
import {
  Box,
  Typography,
  Divider,
  Link,
  TextField,
  Button,
  Grid2 as Grid,
  useMediaQuery,
} from "@mui/material";
import {
  LinkedIn,
  Google,
  GitHub,
  Instagram,
  Email,
  Place,
  Code,
  TipsAndUpdates,
  Person,
} from "@mui/icons-material";
import CustomButton from "./CustomButton";
import LayoutConstants from "../constants/layout";
import FooterSectionCard from "../components/FooterSectionCard";

function Footer() {
  const isMobile = useMediaQuery("(max-width:500px)");
  return (
    <Grid
      columns={12}
      container
      // sx={{ backgroundColor: "red" }}

      direction={"column"}
      sx={{
        backgroundColor: "black",
        paddingX: isMobile
          ? LayoutConstants.MOBILE_HORIZONTAL_PADDING
          : LayoutConstants.PAGE_HORIZONTAL_PADDING,
        paddingY: "10px",
      }}
    >
      <Grid>
        <Typography
          sx={{
            marginBottom: "15px",
            fontSize: "20px",
            fontWeight: "500",
            textAlign: "center",
            color: "white",
          }}
        >
          Subscribe to my Newsletter
        </Typography>
      </Grid>

      {/* <Box
        sx={{
          display: "flex",
          paddingY: "20px",
          paddingX: isMobile ?LayoutConstants.MOBILE_HORIZONTAL_PADDING :  LayoutConstants.PAGE_HORIZONTAL_PADDING,
          background: "black",
          color: "white", 
          justifyContent: "space-between",
        }}
      >
      
      </Box> */}
      {/* Branding Section */}
      {/* <Box sx={{ flex: 1, marginRight: "10px", display: "none" }}>
        <Typography
          sx={{ marginBottom: "15px", fontSize: "20px", fontWeight: "500" }}
        >
          Vendoza
        </Typography>
        <Typography variant="body2">
          Vendoza is your gateway to curated products from global brands and
          local artisans. We focus on providing a personalized shopping
          experience with exceptional quality and customer service.
        </Typography>
      </Box> */}

      {/* Newsletter Subscription Section */}
      <Grid
        columns={12}
        direction={isMobile ? "column" : "row"}
        container
        size={{ xs: 12, md: 12, lg: 12 }}
        columnSpacing={2}
        rowSpacing={2}
        // sx={{paddingX:"10px"}}
      >
        <Grid size={{ xs: 12, md: 3, lg: 3 }}>
          <Box sx={{ borderRadius: "10px" }}>
            <Typography variant="body2" color="white">
              Stay updated with solutions and blogs.
            </Typography>
            <Box component="form" sx={{ marginTop: "10px" }}>
              <TextField
                type="email"
                color="white"
                size="small"
                placeholder="Enter your email ..."
                sx={{
                  background: "white",
                  width: "80%",
                  borderRadius: "4px",
                  marginBottom: "8px",
                }}
                slotProps={{
                  input: {
                    style: { fontSize: "12px" },
                  },
                }}
              />

              <Button
                variant="outlined"
                sx={{
                  borderRadius: "4px",
                  // marginX : isMobile?"10px" : "0px"
                  backgroundColor: "rgb(255, 92, 0)",
                  color: "white",
                  borderColor: "transparent",
                  fontSize: "12px",
                }}
                // onClick={onClick}
              >
                Subscribe
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 3, lg: 3 }}>
          <Box
            sx={{
              borderRadius: "10px",
              padding: "10px",
              color: "black",
              backgroundColor: "white",
              height: "140px",
            }}
          >
            <Typography
              sx={{ marginBottom: "15px", fontSize: "20px", fontWeight: "500" }}
            >
              About
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <FooterSectionCard
                SectionIcon={Person}
                text={"About Me"}
                link={"/About"}
              />
              <FooterSectionCard
                SectionIcon={Code}
                text={"Solutions"}
                link={"/Solutions"}
              />
              <FooterSectionCard
                SectionIcon={TipsAndUpdates}
                text={"Projects"}
                link={"/Projects"}
              />
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 3, lg: 3 }}>
          <Box
            sx={{
              borderRadius: "10px",
              padding: "10px",
              backgroundColor: "white",
              color: "black",
              height: "140px",
            }}
          >
            <Typography
              sx={{ marginBottom: "15px", fontSize: "20px", fontWeight: "500" }}
            >
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <FooterSectionCard
                SectionIcon={Email}
                text={"shivabande09@gmail.com"}
                link={"#"}
              />
              <FooterSectionCard
                SectionIcon={Place}
                text={"Hyderabad, India"}
                link={"#"}
              />
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 3, lg: 3 }}>
          <Box
            sx={{
              borderRadius: "10px",
              padding: "10px",
              backgroundColor: "white",
              color: "black",
              height: "140px",
            }}
          >
            <Typography
              sx={{ marginBottom: "15px", fontSize: "20px", fontWeight: "500" }}
            >
              Social
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <FooterSectionCard
                SectionIcon={LinkedIn}
                text={"LinkedIn"}
                link={"/https://linkedin.com/in/shivraj-bande"}
              />
              <FooterSectionCard
                SectionIcon={GitHub}
                text={"GitHub"}
                link={"/https://github.com/shivrajbande"}
              />
              <FooterSectionCard
                SectionIcon={Instagram}
                text={"Instagram"}
                link={"#"}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "6px",
                  display: "none",
                }}
              >
                <Google sx={{ marginRight: "4px", fontSize: "20px" }} />
                <Link href="#" underline="none" color="white" target="_blank">
                  Google
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 12, lg: 12 }}>
          <Divider sx={{ backgroundColor: "white", marginY: "20px" }} />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="body2"
              align="center"
              sx={{ paddingBottom: "10px", color: "white" }}
            >
              © 2024 Shivraj Bande. All Rights Reserved.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
