import React from "react";
import {
  Box,
  Typography,
  Grid2 as Grid,
  Divider,
  useMediaQuery,
} from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import { projectsData, mobileAppsProjects } from "../constants/projects";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LayoutConstants from "../constants/layout";

function MyProjects() {
  const isMobile = useMediaQuery("(max-width:500px)");
  return (
    <Box>
      <Header />
      <Box
        sx={{
          paddingX: isMobile
            ? LayoutConstants.MOBILE_HORIZONTAL_PADDING
            : LayoutConstants.PAGE_HORIZONTAL_PADDING,
          display: "flex",
          flexDirection: "column",
          // justifyContent: isMobile?"center": "start",
          // backgroundColor : "red",
        }}
      >
        <h2 style={{ textAlign: isMobile ? "center" : "start" }}>
          Web Developement projects
        </h2>

        <Grid
          container
          columns={12}
          columnSpacing={2}
          rowSpacing={10}
          direction={isMobile ? "column" : "row"}
        >
          {projectsData.map((project) => (
            <Grid size={{ xs: 12, md: 4,lg:3}}>
              <ProjectCard
                projectName={project.projectName}
                projectURL={project.githubURL}
                projectContributors={project.contributors}
                thumbnail={project.thumbNail}
                shortDescription={project.shortDescription}
                isLive={project.isLive}
                hostedURL={project.hostedURL}
                projectDescription={project.projectDescription}
              />
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ marginY: "40px" }} />
      </Box>

      <Box  sx={{
          paddingX: isMobile
            ? LayoutConstants.MOBILE_HORIZONTAL_PADDING
            : LayoutConstants.PAGE_HORIZONTAL_PADDING,
          display: "flex",
          flexDirection: "column",

          // justifyContent: isMobile?"center": "start",
          // backgroundColor : "red",
        }}>
        <h2 style={{ textAlign: isMobile ? "center" : "start" }}>Application Developement Projects</h2>

        <Grid
          container
          columnSpacing={2} 
          rowSpacing={10}
          alignItems="center"
          justifyContent={"start"}
          direction={isMobile ? "column" : "row"}
          // sx={{backgroundColor : "green"}}
        >
          {mobileAppsProjects.map((project) => (
            <Grid size={{ xs: 12, md: 4,lg:3 }}>
              <ProjectCard
                projectName={project.projectName}
                projectURL={project.projectURL}
                projectContributors={project.projectContributors}
                thumbnail={project.thumbNail}
                shortDescription={project.shortDescription}
                isLive={project.isLive}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}

export default MyProjects;
