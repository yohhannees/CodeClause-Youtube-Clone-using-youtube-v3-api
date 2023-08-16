import React, { useEffect, useState } from "react";
import axiosInstance from "../Api/api";

interface VideoItem {
  id: { videoId: string };
  snippet: {
    title: string;
    description: string;
    channelId: string;
    channelTitle: string;
    views: number;
    thumbnails: {
      medium: {
        url: string;
      };
    };
    publishedAt: string;
  };
}

const truncate = (text: string, length: number) => {
  return text.length > length ? text.substring(0, length) + "..." : text;
};

const VideoList: React.FC = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get("search", {
        params: {
          q: "nature",
          maxResults: 12,
          part: "snippet",
        },
      })
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {loading || videos.length === 0
          ? Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="p-4 border border-gray-300 animate-pulse"
              >
                <div className="bg-gray-300 h-32 mb-4"></div>
                <div className="bg-gray-200 h-4 w-2/3 mb-2"></div>
                <div className="bg-gray-200 h-4 w-1/2"></div>
              </div>
            ))
          : videos.map((video) => (
              <div
                key={video.id.videoId}
                className="p-4 border border-gray-300 rounded"
              >
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                <h2 className="mt-2 text-xl font-semibold">
                  {truncate(video.snippet.title, 40)} {/* Truncate the title */}
                </h2>
                <p className="text-gray-500">{video.snippet.channelTitle}</p>
                <p className="text-gray-500">
                  {video.snippet.views} 2M • {video.snippet.publishedAt}
                </p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default VideoList;
