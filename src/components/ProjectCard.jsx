import React,{useState} from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  Link,
} from "@mui/material";

import { Code, FlashOn } from "@mui/icons-material";
import CustomDialog from "./CustomDialog";


export default function ProjectCard({
  projectName,
  projectURL,
  projectContributors,
  thumbnail,
  shortDescription,
  projectDescription,
  isLive,
  hostedURL,
}) {


  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to control dialog visibility
  const [projectData, setProjectData] = useState(null); // State to hold project data

  const handleProject = () => {
    const temp = {
      projectName,
      projectURL,
      projectContributors,
      thumbnail,
      shortDescription,
      projectDescription,
      isLive,
      hostedURL,
    };


    setProjectData(temp); 
    // setIsDialogOpen(true);
  };


  return (
    <div onClick={handleProject}>
      <Card
        sx={{
          height: "auto",
          // width: "350px",
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
          alignItems: "start",
          paddingX: "10px",
          cursor : "pointer"
        }}
      >
        <CardContent>
          <h4 style={{ margin: "0px" }}>{projectName}</h4>
          <Box
            sx={{
              height: "200px",
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              marginTop: "10px",
              paddingRight: "4px",
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
          <Link href={projectURL}>
            <Button
              variant="outlined"
              size="small"
              startIcon={<Code />}
              sx={{
                backgroundColor: "white",
                color: "black",
                borderColor: "gray",
              }}
            >
              Code
            </Button>
          </Link>
          {isLive === true ? (
            <Link href={hostedURL}>
              <Button
                variant="outlined"
                size="small"
                startIcon={<FlashOn />}
                sx={{
                  backgroundColor: "white",
                  color: "rgb(255, 92, 0)",
                  borderColor: "rgb(255, 92, 0)",
                }}
              >
                live
              </Button>
            </Link>
          ) : (
            <></>
          )}
        </CardActions>
      </Card>

      {isDialogOpen && (
        <CustomDialog 
          projectMetaData={projectData} 
          
        />
      )}
    </div>
  );
}
