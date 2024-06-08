import React, { useState } from "react";
import "./VideoList.scss";

type Video = {
  id: number;
  title: string;
  url: string;
};

type Props = {
  videos: Video[];
};

const VideoList: React.FC<Props> = ({ videos }) => {
  const [activeVideoId, setActiveVideoId] = useState<number>(1);

  const handleVideoClick = (id: number) => {
    setActiveVideoId(id);
  };

  return (
    <div className="video-list">
      <h3>Theme</h3>
      <ul>
        {videos.map((video) => (
          <li
            key={video.id}
            className={`video-item ${
              video.id === activeVideoId ? "active" : ""
            }`}
            onClick={() => handleVideoClick(video.id)}
          >
            <div className="video-icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8L16 12L10 16V8Z" fill="currentColor" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 2H20C21.1 2 22 2.9 22 4V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V4C2 2.9 2.9 2 4 2ZM4 4V20H20V4H4Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <a href={video.url} className="video-title">
              {video.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
