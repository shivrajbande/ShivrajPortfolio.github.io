import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, TextField, InputAdornment } from "@mui/material";
import { Person, Email, LocalPhone } from "@mui/icons-material";
import connectImage from "../assets/images/letsconnect1.jpg";
import CustomButton from "../components/CustomButton";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleChange = (field) => (event) => {
    const { value } = event.target;
    switch (field) {
      case "name":
        setName(value);
        setErrors((prev) => ({ ...prev, name: value.trim() === "" }));
        break;
      case "email":
        setEmail(value);
        setErrors((prev) => ({
          ...prev,
          email: !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value),
        }));
        break;
      case "phone":
        setPhone(value);
        setErrors((prev) => ({
          ...prev,
          phone: !/^\d{10}$/.test(value),
        }));
        break;
      case "message":
        setMessage(value);
        setErrors((prev) => ({ ...prev, message: value.trim() === "" }));
        break;
      default:
        break;
    }
  };

  const handleBlur = (field) => () => {
    switch (field) {
      case "name":
        setErrors((prev) => ({ ...prev, name: name.trim() === "" }));
        break;
      case "email":
        setErrors((prev) => ({
          ...prev,
          email: !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email),
        }));
        break;
      case "phone":
        setErrors((prev) => ({
          ...prev,
          phone: !/^\d{10}$/.test(phone),
        }));
        break;
      case "message":
        setErrors((prev) => ({ ...prev, message: message.trim() === "" }));
        break;
      default:
        break;
    }
  };

  return (
    <Box>
      <Header />
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(255,255,240)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90%",
            backgroundColor: "white",
            borderRadius: "7px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              height: "80%",
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              justifyContent: "center",
              paddingX: "20px",
            }}
          >
            <TextField
              placeholder="Name..."
              value={name}
              onChange={handleChange("name")}
              onBlur={handleBlur("name")}
              error={errors.name}
              helperText={errors.name ? "Name is required" : ""}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment sx={{ marginRight: "6px" }}>
                      <Person />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                marginY: "10px",
                width: { xs: "100%", lg: "100%" },
                ".MuiInputBase-root": {
                  maxHeight: "50px",
                  fontSize: "16px",
                  background: "white",
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "orange",
                },
              }}
            />
            <Box display={"flex"}>
              <TextField
                placeholder="Email..."
                value={email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                error={errors.email}
                helperText={errors.email ? "Enter a valid email address" : ""}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment sx={{ marginRight: "6px" }}>
                        <Email />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  marginY: "10px",
                  marginRight: "10px",
                  width: { xs: "100%", lg: "90%" },
                  ".MuiInputBase-root": {
                    maxHeight: "50px",
                    fontSize: "16px",
                    background: "white",
                  },
                  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "orange",
                  },
                }}
              />
              <TextField
                placeholder="Phone Number..."
                value={phone}
                onChange={handleChange("phone")}
                onBlur={handleBlur("phone")}
                error={errors.phone}
                helperText={errors.phone ? "Enter a valid 10-digit phone number" : ""}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment sx={{ marginRight: "6px" }}>
                        <LocalPhone />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{
                  marginY: "10px",
                  width: { xs: "100%", lg: "90%" },
                  ".MuiInputBase-root": {
                    maxHeight: "50px",
                    fontSize: "16px",
                    background: "white",
                  },
                  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "orange",
                  },
                }}
              />
            </Box>
            <TextField
              placeholder="Message..."
              value={message}
              onChange={handleChange("message")}
              onBlur={handleBlur("message")}
              error={errors.message}
              helperText={errors.message ? "Message is required" : ""}
              multiline
              minRows={5}
              sx={{
                marginY: "20px",
                width: { xs: "100%", lg: "100%" },
                ".MuiInputBase-root": {
                  minHeight: "200px",
                  fontSize: "16px",
                  background: "white",
                  paddingLeft: "8px",
                  lineHeight: "1.5",
                  display: "flex",
                  alignItems: "flex-start",
                },
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "orange",
                },
              }}
            />
            <CustomButton
              text={"Send"}
              onClick={() => {
                // Add further logic for form submission here, if needed.
              }}
              backGroundColor={"rgb(255, 92, 0)"}
              textColor={"white"}
            />
          </Box>
          <img
            src={connectImage}
            alt="lets connect"
            style={{ objectFit: "contain", height: "400px" }}
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default ContactPage;
