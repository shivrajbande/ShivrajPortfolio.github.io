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
    <Card sx={{ height: "300px", width: "300px" }}>
      <CardContent>
        <Typography>{projectName}</Typography>
        <img src={thumbnail} alt="projectName" />
        <Typography>{shortDescription}</Typography>
      </CardContent>
      <CardActions>
        <Button>Github</Button>
        {isLive ?? <Button>live</Button>}
      </CardActions>
    </Card>
  );
}
