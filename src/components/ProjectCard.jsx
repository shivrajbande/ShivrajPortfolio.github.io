import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

export default function ProjectCard({
  projectName,
  projectURL,
  projectContributors,
  thumbnail,
  shortDescription,
  isLive,
}) {
  return (
    <Card
      sx={{
        height: "400px",
        width: "350px",
        display: "flex",
        justifyContent: "start",
        flexDirection: "column",
        alignItems: "start",
        paddingX: "10px",
      }}
    >
      <CardContent sx={{ height: "350px",
            width: "100%",}}>
        <h4>{projectName}</h4>
        <Box
          sx={{
            height : "200px",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            marginTop: "4px",
            paddingRight : "4px",
          }}
        >
          <img
            src={thumbnail}
            alt="projectName"
            style={{ objectFit: "cover", height: "200px", width: "300px" }}
          />
        </Box>
        <Typography
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            marginTop: "4px",
            maxWidth: "340px",
          }}
        >
          {shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">Github</Button>
        {isLive ?? <Button>live</Button>}
      </CardActions>
    </Card>
  );
}
