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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("search", {
        params: {
          q: "sport",
          maxResults: 30,
          part: "snippet",
        },
      })
      .then((response) => {
        setVideos(response.data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>YouTube Clone</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {loading
          ? // Display loading skeletons for each video
            Array.from({ length: 30 }).map((_, index) => (
              <div
                key={index}
                className="p-4 border border-gray-300 animate-pulse"
              >
                <div className="bg-gray-300 h-32 mb-4"></div>
                <div className="bg-gray-200 h-4 w-2/3 mb-2"></div>
                <div className="bg-gray-200 h-4 w-1/2"></div>
              </div>
            ))
          : // Display fetched videos
            videos.map((video) => (
              <div
                key={video.id.videoId}
                className="p-4 border border-gray-300"
              >
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
