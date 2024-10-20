import React from "react";
import { Box, Typography ,Grid2 as Grid,Divider} from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import { projectsData, mobileAppsProjects } from "../constants/projects";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyProjects() {
  return (
    <Box>
      <Header/>

      <Box>
      <Typography>Web Developement projects</Typography>
      <Divider/>
      <Grid container columnSpacing={10} rowSpacing={10} direction={"row"}>
        {projectsData.map((project) => (
          <ProjectCard
            projectName={project.projectName}
            projectURL={project.projectURL}
            projectContributors={project.projectContributors}
            thumbnail={project.thumbNail}
            shortDescription={project.shortDescription}
            isLive={project.isLive}
          />
        ))}
      </Grid>
      </Box>


      <Box>
      <Typography>Application Developement Projects</Typography>
      <Divider/>  
      <Grid container columnSpacing={10} rowSpacing={10} direction={"row"}>
        {mobileAppsProjects.map((project) => (
          <ProjectCard
            projectName={project.projectName}
            projectURL={project.projectURL}
            projectContributors={project.projectContributors}
            thumbnail={project.thumbNail}
            shortDescription={project.shortDescription}
            isLive={project.isLive}
          />
        ))}
      </Grid>
      </Box>
      <Footer/>
      
    </Box>
  );
}

export default MyProjects;
