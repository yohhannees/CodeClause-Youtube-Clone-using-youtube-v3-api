import React, { useEffect, useState } from "react";
import axiosInstance from "../Api/api";

interface VideoItem {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

const VideoList: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);

  useEffect(() => {
    axiosInstance
      .get("search", {
        params: {
          q: "programming", // Your search query
          maxResults: 10, // Number of results
          part: "snippet",
        },
      })
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  return (
    <div>
      <h1>YouTube Clone</h1>
      <div className="grid grid-cols-1 gap-4">
        {videos.map((video) => (
          <div key={video.id.videoId} className="p-4 border border-gray-300">
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <h2>{video.snippet.title}</h2>
            <p>{video.snippet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoList;
