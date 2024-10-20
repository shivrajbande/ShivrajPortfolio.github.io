import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Typography, Divider, Link } from "@mui/material";
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
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
                justifyContent: "start",
              }}
            >
              <RemoveRedEye />
              {views}
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
                justifyContent: "start",
              }}
            >
              <MenuBook />
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
        padding: "10px 20px",
        borderRadius: "10px",
        color: "black",
      }}
    >
      {name}
    </Box>
  );
};

export default function BlogPage() {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: "flex",
          paddingX: LayoutConstants.PAGE_HORIZONTAL_PADDING,
          marginY: "20px",
        }}
      >
        <Box sx={{ flex: "2" }}>
          <Typography sx={{ marginBottom: "10px" }}>Your Stoies</Typography>
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
        </Box>
        <Box sx={{ flex: "1", marginLeft: "50px" }}>
          <Typography sx={{ marginBottom: "10px" }}>Topics</Typography>
          <Divider />
          <Box
            sx={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}
            gap={"12px"}
          >
            {topics.map((topic) => {
              return <TopicComponent name={topic} />;
            })}
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
