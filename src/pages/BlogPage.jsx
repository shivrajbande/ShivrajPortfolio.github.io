import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Box,
  Typography,
  Divider,
  Link,
  Card,
  Grid2 as Grid,
  useMediaQuery,
} from "@mui/material";
import LayoutConstants from "../constants/layout";
import { stories, topics } from "../constants/content";
import { MenuBook, RemoveRedEye } from "@mui/icons-material";

const StoryCard = ({ name, subTitle, published, views, reads, url }) => {
  return (
    <Link
      href={url}
      sx={{ textDecoration: "none", cursor: "pointer", color: "black" }}
    >
      <Box sx={{ marginY: "20px" }}>
        <Typography sx={{ fontWeight: 700 }}>{name}</Typography>
        <Typography sx={{ color: "grey" }}>{subTitle}</Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography sx={{ color: "grey" }}>
            Published on {published}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "110px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <RemoveRedEye sx={{ marginRight: "3px" }} />
              {views}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <MenuBook sx={{ marginRight: "3px" }} />
              {reads}
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

const TopicComponent = ({ name }) => {
  return (
    <Box
      sx={{
        border: "1px solid grey",
        padding: "8px 10px",
        borderRadius: "10px",
        color: "black",
        gap: "10px",
      }}
    >
      {name}
    </Box>
  );
};

export default function BlogPage() {
  const isMobile = useMediaQuery('(max-width:500px)');
  return (
    <Box>
      <Header />
      {/* <Box
        sx={{
          display: "flex",
          paddingX: LayoutConstants.PAGE_HORIZONTAL_PADDING,
        }}
      >

      </Box> */}
      <Grid container columns={12}  sx={{
          display: "flex",
          paddingBottom : "20px",
          paddingX: isMobile?LayoutConstants.MOBILE_HORIZONTAL_PADDING: LayoutConstants.PAGE_HORIZONTAL_PADDING,
        }}>
        <Grid size={{ xs: 12, md: 8, lg: 8 }}>
          <h2>Your Stoies</h2>
          <Divider />
          {stories.map((story) => (
            <>
              <StoryCard
                name={story.title}
                subTitle={story.subTitle}
                published={story.publishedDate}
                views={story.totalViews}
                reads={story.totalRead}
                url={story.url}
              />
              <Divider />
            </>
          ))}
        </Grid>
        <Grid display={isMobile ?? "none"} size={{ xs: 0, md: 4, lg: 4 }}>
          <Box sx={{ flex: "1", marginLeft: "50px" }}>
            <h2>Topics</h2>
            <Card
              sx={{
                display: "flex",
                flexWrap: "wrap",
                padding: "20px",
                gap: "10px",
                // backgroundColor  :"Red"
              }}
            >
              {topics.map((topic) => {
                return <TopicComponent name={topic} />;
              })}
            </Card>
          </Box>
        </Grid>
      </Grid>

      <Footer />
    </Box>
  );
}
