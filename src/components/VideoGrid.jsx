import React, { useState, useEffect } from "react";

// Extracts YouTube video ID from various URL formats
function getYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/shorts\/([^&\n?#]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

// Modal overlay player
const VideoModal = ({ video, onClose }) => {
  const videoId = getYouTubeId(video?.url);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal box */}
      <div
        className="relative z-10 w-full max-w-3xl rounded-2xl overflow-hidden bg-[#111] border border-[#2a2a2a] shadow-2xl shadow-black/60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#222]">
          <p className="text-sm text-gray-300 font-medium truncate pr-4">
            {video.title || "Video"}
          </p>
          <button
            onClick={onClose}
            className="shrink-0 w-8 h-8 rounded-full bg-[#1e1e1e] hover:bg-[#FF0555] border border-[#333] hover:border-[#FF0555] text-gray-400 hover:text-white transition-all duration-200 flex items-center justify-center"
            aria-label="Close player"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Player */}
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          {videoId ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={video.title || "YouTube Video"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            /* Fallback: non-YouTube URL */
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] gap-4">
              <p className="text-gray-400 text-sm">Can't embed this video directly.</p>
              <a
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#FF0555] text-white text-sm rounded-lg hover:bg-[#e0043d] transition-colors"
              >
                Open in new tab
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const VideoGrid = ({ videos, title }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  if (!videos || videos.length === 0) {
    return (
      <div className="py-12 text-center text-gray-500 text-sm">
        No videos available for this category.
      </div>
    );
  }

  return (
    <>
      {/* Popup modal */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}

      <div className="py-6 md:py-10">
        <div className="flex items-center gap-3 mb-6 md:mb-8">
          <span className="w-1 h-6 rounded-full bg-[#FF0555] block shrink-0" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {videos.slice(0, 4).map((video, index) => (
            <button
              key={index}
              onClick={() => setActiveVideo(video)}
              className="group bg-[#111] rounded-xl overflow-hidden border border-[#222] hover:border-[#FF0555]/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#FF0555]/10 hover:-translate-y-0.5 text-left w-full"
            >
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title || "Video thumbnail"}
                  className="w-full h-44 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#FF0555] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg">
                    <svg
                      className="w-5 h-5 text-white ml-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.344-5.891a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </div>

              {video.title && (
                <div className="px-3 py-2.5">
                  <p className="text-sm text-gray-300 font-medium line-clamp-1 group-hover:text-white transition-colors">
                    {video.title}
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoGrid;

