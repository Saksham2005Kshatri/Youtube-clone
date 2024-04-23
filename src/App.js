import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { Navbar, Feed, VideoDetail, Channel, SearchFeed } from "./components";

function App() {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/search/:searchQuery" element={<SearchFeed />} />
      </Routes>
    </Box>
  );
}

export default App;
