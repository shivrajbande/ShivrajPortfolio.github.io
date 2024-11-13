import React from "react";
import { Box, Typography, Grid2 as Grid, Divider } from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import { projectsData, mobileAppsProjects } from "../constants/projects";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LayoutConstants from "../constants/layout";

function MyProjects() {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          paddingX: LayoutConstants.PAGE_HORIZONTAL_PADDING,
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <h2 >Web Developement projects</h2>

        <Grid container columnSpacing={7} rowSpacing={10} direction={"row"}>
          {projectsData.map((project) => (
            <ProjectCard
              projectName={project.projectName}
              projectURL={project.githubURL}
              projectContributors={project.contributors}
              thumbnail={project.thumbNail}
              shortDescription={project.shortDescription}
              isLive={project.isLive}
              hostedURL = {project.hostedURL}
              projectDescription = {project.projectDescription}
            />
          ))}
        </Grid>
        <Divider sx={{ marginTop: "80px" }} />
      </Box>

      <Box sx={{ padding: LayoutConstants.PAGE_HORIZONTAL_PADDING }}>
        <h2 >Application Developement Projects</h2>

        <Grid container columnSpacing={7} rowSpacing={10} direction={"row"}>
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
      <Footer />
    </Box>
  );
}

export default MyProjects;
