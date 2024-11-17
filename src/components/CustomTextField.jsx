import React from "react";
import { TextField,  InputAdornment, } from "@mui/material";

function CustomTextField({type,placeholder,Icon,isError,handleChange,handleBlur,value,errorText}) {
  return (
    <TextField
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      error={isError}
      helperText={isError? errorText : ""}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment sx={{ marginRight: "6px" }}>
              {Icon}
            </InputAdornment>
          ),
        },
      }}
      sx={{
        marginY: "7px",
        marginRight: "10px",
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
  );
}

export default CustomTextField;
