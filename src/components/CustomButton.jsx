import React from 'react'
import {Button} from "@mui/material";

function CustomButton({text,onClick,backGroundColor, textColor}) {
  return (
    <Button variant='outlined' sx={{borderRadius : "4px",background : backGroundColor, color : textColor, borderColor : "transparent"}} onClick={onClick}>{text}</Button>
  )
}

export default CustomButton