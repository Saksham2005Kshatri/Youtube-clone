import React from "react";
import { Stack, Box } from "@mui/material";

import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction }) => {

  

  return (
    <Stack direction={direction ? direction: "row"} flexWrap="wrap" justify-content="start" gap={2}>
      {videos.map((data, key) => (
        <Box key={key}>
          {data.id.videoId && <VideoCard video={data} />}
          {data.id.channelId && <ChannelCard channelDetail={data} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
