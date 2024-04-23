import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI.js";
import { ChannelCard, Videos } from "./";

const Channel = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const channelId = useParams();

  console.log(channelId);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${channelId.id}`)
      .then((data) => setChannelDetail(data?.items[0]))
      .catch((error) => console.log(`Channel error: ${error.message}`));

    fetchFromAPI(`search?channelId=${channelId.id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
      .catch((error) => console.log(`Video error: ${error}`));
  }, [channelId]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(66,9,121,1) 81%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard marginTop="-93px" channelDetail={channelDetail} />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default Channel;
