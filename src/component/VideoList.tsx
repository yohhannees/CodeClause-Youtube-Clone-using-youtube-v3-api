import React, { useEffect, useState } from "react";
import axiosInstance from "../Api/api";
import {
  FaThumbsUp,
  FaThumbsDown,
  FaShare,
  FaDownload,
  FaEllipsisH,
  FaBell,
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
  const [relatedVideos, setRelatedVideos] = useState<VideoItem[]>([]);

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

  useEffect(() => {
    if (selectedVideo) {
      axiosInstance
        .get("search", {
          params: {
            relatedToVideoId: selectedVideo.id.videoId,
            maxResults: 20,
            part: "snippet",
          },
        })
        .then((response) => {
          setRelatedVideos(response.data.items);
        })
        .catch((error) => {
          console.error("Error fetching related videos:", error);
        });
    }
  }, [selectedVideo]);

  return (
    <div className="flex">
      {selectedVideo && (
        <div className="flex-1 pr-4">
          {/* Video Player */}
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          {/* Icons for UI */}
          <div className="flex mt-4">
            <div className="flex items-center pr-4">
              <FaBell className="text-xl mr-1" />
              <p>Subscribed</p>
            </div>
            <div className="flex items-center pr-4">
              <FaThumbsUp className="text-xl mr-1" />
              <FaThumbsDown className="text-xl mr-1" />
              <FaShare className="text-xl mr-1" />
              <FaDownload className="text-xl mr-1" />
              <FaEllipsisH className="text-xl" />
            </div>
          </div>
        </div>
      )}
      <div className="flex-1">
        {/* List of Fetched Videos */}
        <div className="grid gap-4 overflow-y-scroll max-h-screen mt-4">
          {relatedVideos.map((video) => (
            <div key={video.id.videoId} className="flex gap-4">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <p className="text-gray-700 text-sm">
                  {truncate(video.snippet.title, 40)}
                </p>
                <p className="text-gray-500 text-xs">
                  {video.snippet.channelTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;
