import { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";

import { Videos } from "./";

import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI.js";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  const { searchQuery } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchQuery}`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.log(`This is the error: ${error}`));
  }, [searchQuery]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for{" "}
        <span style={{ color: "#F31503" }}>{searchQuery}</span>
        <Videos videos={videos} />
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
