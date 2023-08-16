import React, { useEffect, useState } from "react";
import axiosInstance from "../Api/api";

import {
  FaBell,
  FaThumbsUp,
  FaThumbsDown,
  FaShare,
  FaDownload,
} from "react-icons/fa";

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
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
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
    <div className="flex">
      <div className="flex-1 pr-4">
        {selectedVideo ? (
          <div>
            {/* Video Player */}
            <iframe
              width="120%"
              height="390"
              src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            {/* Video and Channel Information */}
            <div className="mt-4">
              <p className="text-xl font-semibold">
                {truncate(selectedVideo.snippet.title, 60)}
              </p>
              <p className="text-gray-500">
                {selectedVideo.snippet.channelTitle}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "20px",
                      padding: "5px 10px",
                      display: "flex",
                      alignItems: "center",
                      marginRight: "30px",
                    }}
                  >
                    <FaBell style={{ marginRight: "5px" }} />
                    <span>Subscribed</span>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "20px",
                      padding: "5px 10px",
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  >
                    <FaThumbsUp style={{ marginRight: "5px" }} />
                    <span>Like</span>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "20px",
                      padding: "5px 10px",
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  >
                    <FaThumbsDown style={{ marginRight: "5px" }} />
                    <span>Dislike</span>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "20px",
                      padding: "5px 10px",
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  >
                    <FaShare style={{ marginRight: "5px" }} />
                    <span>Share</span>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "20px",
                      padding: "5px 10px",
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                  >
                    <FaDownload style={{ marginRight: "5px" }} />
                    <span>Download</span>
                  </div>
                </div>
              </p>
            </div>
            {/* Icons for UI */}
            <div className="flex mt-4"></div>
          </div>
        ) : (
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
                    className="p-4 border border-gray-300 rounded cursor-pointer"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <img
                      src={video.snippet.thumbnails.medium.url}
                      alt={video.snippet.title}
                    />
                    <h2 className="mt-2 text-xl font-semibold">
                      {truncate(video.snippet.title, 40)}
                    </h2>
                    <p className="text-gray-500">
                      {video.snippet.channelTitle}
                    </p>
                    <p className="text-gray-500">
                      {video.snippet.views} views • {video.snippet.publishedAt}
                    </p>
                  </div>
                ))}
          </div>
        )}
      </div>
      {selectedVideo && (
        <div className="flex-1">

          {/* List of Fetched Videos */}
          <div className="grid gap-4">
         
            {/* Display other fetched videos in a single column */}
          
            {/* You can fetch more videos here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoList;
