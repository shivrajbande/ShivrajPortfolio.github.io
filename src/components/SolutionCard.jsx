import { Box,Typography } from '@mui/material'
import React from 'react'

function SolutionCard({solution,index}) {
  return (
    <Box sx={{ backgroundColor : index%2===0?"red" : "yellow",width : "100%",height : "500px",display : "flex",flexDirection : index%2===0?"row" : "row-reverse", justifyContent : "space-between",alignItems : "center"}}>
        <Box sx={{}}>
            <Typography>{solution.solutionName}</Typography>
        </Box>
        <Box>
            
        </Box>


    </Box>
  )
}

export default SolutionCard