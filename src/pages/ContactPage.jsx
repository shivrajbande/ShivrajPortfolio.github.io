import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Box,
  TextField,
  InputAdornment,
  useMediaQuery,
  Grid2 as Grid,
  Button,
} from "@mui/material";
import { Person, Email, LocalPhone } from "@mui/icons-material";
import CustomButton from "../components/CustomButton";
import LayoutConstants from "../constants/layout";
import CustomTextField from "../components/CustomTextField";

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
  const isMobile = useMediaQuery("(max-width:500px)");

  return (
    <Box>
      <Header />
    <Box  sx={{display : "flex",justifyContent : "center",width : "100%",alignItems  :"center"}}>
    <Box
        sx={{
          width: isMobile? "100%" : "50%",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          height: isMobile
          ? errors.email || errors.message || errors.phone || errors.name
            ? "70vh"
            : "60vh"
          : "65vh",
          justifyContent : "center",
          paddingX: isMobile
          ? LayoutConstants.MOBILE_HORIZONTAL_PADDING
          : LayoutConstants.PAGE_HORIZONTAL_PADDING,
        }}
      >
        <CustomTextField
          type={"name"}
          placeholder={"Name..."}
          Icon={<Person />}
          isError={errors.name}
          handleChange={handleChange("name")}
          handleBlur={handleBlur("name")}
          value={name}
          errorText={"Enter your name"}
        />
        <Box sx={{ display: "flex", gap: "16px" ,flexDirection : isMobile?"column" : "row"}}>
          <CustomTextField
            type={"email"}
            placeholder={"Enter your email ..."}
            Icon={<Email />}
            isError={errors.email}
            handleChange={handleChange("email")}
            handleBlur={handleBlur("email")}
            value={email}
            errorText={"Enter a valid email address"}
          />
          <CustomTextField
            type={"phone"}
            placeholder={"Phone Number..."}
            Icon={<LocalPhone />}
            isError={errors.phone}
            handleChange={handleChange("phone")}
            handleBlur={handleBlur("phone")}
            value={phone}
            errorText={"Enter a valid 10-digit phone number"}
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
          sx={{ marginY: "0px" }}
        />
        <Button
          variant="outlined"
          fullWidth
          size="large"
          sx={{ background: "rgb(255, 92, 0)", color: "white" }}
        >
          Send
        </Button>
      </Box>
    </Box>

      <Footer />
    </Box>
  );
}

export default ContactPage;
