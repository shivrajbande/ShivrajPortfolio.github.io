import React from "react";
import {
  Box,
  Typography,
  Divider,
  Link,
  TextField,
  Button,
} from "@mui/material";
import {
  LinkedIn,
  Google,
  GitHub,
  Instagram,
  Email,
  Place,
} from "@mui/icons-material";
import CustomButton from "./CustomButton";
import LayoutConstants from "../constants/layout";

function Footer() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          paddingY: "20px",
          paddingX: LayoutConstants.PAGE_HORIZONTAL_PADDING,
          background: "black",
          color: "white",
          justifyContent: "space-between",
        }}
      >
        {/* Branding Section */}
        <Box sx={{ flex: 1, marginRight: "10px", display: "none" }}>
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
        </Box>

        {/* Newsletter Subscription Section */}
        <Box flex={1}>
          <Typography
            sx={{ marginBottom: "15px", fontSize: "20px", fontWeight: "500" }}
          >
            Subscribe to my Newsletter
          </Typography>
          <Typography variant="body2">
            Stay updated with solutions and blogs.
          </Typography>
          <Box component="form" sx={{ marginTop: "10px" }}>
            {/* <input
              type="email"
              placeholder="Your email"
              style={{ padding: "8px", width: "80%" }}
            /> */}

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
              // InputProps={{
              //   style: { fontSize: "16px" }, // Change this to your desired font size
              // }}
              // InputLabelProps={{
              //   style: { fontSize: "16px" }, // Change this to your desired font size for the label
              // }}
            />
            {/* <button
              type="submit"
              style={{ padding: "8px", marginLeft: "0px", marginTop : "5px" }}
            >
              Subscribe
            </button> */}
            {/* <CustomButton
              text={"Subscribe"}
              textColor={"black"}
              backGroundColor={"white"}
            /> */}

            <Button
              variant="outlined"
              sx={{
                borderRadius: "4px",
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

        {/* About, Contact, and Social Links Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flex: "3",
            // background : "red",
            justifyContent: "space-around",
          }}
        >
          {/* About Section */}
          <Box sx={{ marginRight: "10px" }}>
            <Typography
              sx={{ marginBottom: "15px", fontSize: "20px", fontWeight: "500" }}
            >
              About
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link
                href="#"
                underline="none"
                color="white"
                target="_blank"
                sx={{ marginBottom: "4px" }}
              >
                About Us
              </Link>
              <Link href="#" underline="none" color="white" target="_blank">
                Solutions
              </Link>
            </Box>
          </Box>

          {/* Contact Section */}
          <Box sx={{ marginRight: "10px" }}>
            <Typography
              sx={{ marginBottom: "15px", fontSize: "20px", fontWeight: "500" }}
            >
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {/* <Link
                href="#"
                underline="none"
                color="white"
                target="_blank"
                sx={{ marginBottom: "4px" }}
              >
                FAQ's
              </Link> */}

              <Box sx={{ display: "flex" }}>
                <Email sx={{marginRight: "4px"}} />
                <Typography sx={{ fontSize: "15px", marginBottom: "4px", }}>
                shivabande09@gmail.com
                </Typography>
              </Box>

             
              {/* <Typography sx={{fontSize : "15px", marginBottom: "4px"}}>Phone: +91-7995646061</Typography> */}
              <Box sx={{ display: "flex" }}>
                <Place sx={{marginRight: "4px"}}/>
                <Typography sx={{ fontSize: "15px", marginBottom: "4px" }}>
                  Hyderabad, India
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Social Links Section */}
          <Box sx={{ marginRight: "10px" }}>
            <Typography
              sx={{ marginBottom: "15px", fontSize: "20px", fontWeight: "500" }}
            >
              Social
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "6px",
                }}
              >
                <LinkedIn sx={{ marginRight: "4px", fontSize: "20px" }} />
                <Link
                  href="https://linkedin.com/in/shivraj-bande"
                  underline="none"
                  color="white"
                  target="_blank"
                  sx={{ marginBottom: "4px" }}
                >
                  LinkedIn
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "6px",
                }}
              >
                <GitHub sx={{ marginRight: "4px", fontSize: "20px" }} />
                <Link
                  href="https://github.com/shivrajbande"
                  underline="none"
                  color="white"
                  target="_blank"
                  sx={{ marginBottom: "4px" }}
                >
                  GitHub
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "6px",
                }}
              >
                <Instagram sx={{ marginRight: "4px", fontSize: "20px" }} />
                <Link
                  href="#"
                  underline="none"
                  color="white"
                  target="_blank"
                  sx={{ marginBottom: "4px" }}
                >
                  Instagram
                </Link>
              </Box>
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
        </Box>
      </Box>

      {/* Footer Divider and Copyright */}
      <Divider sx={{ backgroundColor: "white", marginY: "20px" }} />
      <Typography variant="body2" align="center" sx={{ paddingBottom: "10px" }}>
        © 2024 Shivraj Bande. All Rights Reserved.
      </Typography>
    </>
  );
}

export default Footer;
