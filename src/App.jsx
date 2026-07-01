import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import Sidebar from "./components/Sidebar";
import VideoGrid from "./components/VideoGrid";
import Banner from "./components/Banner";
import videoData from "./data/videoData";

const categories = [
  { key: "podcast", label: "Podcast" },
  { key: "shorts", label: "YouTube Shorts" },
  // { key: "weddingHighlight", label: "Wedding Highlight" },
  { key: "eventHighlight", label: "Event Highlight" },
  // { key: "testimonial", label: "Testimonial" },
  { key: "realEstate", label: "Real Estate Videos" },
  { key: "youtubeTalkingHead", label: "YouTube Talking Head" },
  // { key: "speakerPromo", label: "Speaker Promo" },
  // { key: "weddingVideos", label: "Wedding Videos" },
  { key: "educational", label: "Educational Videos" },
  { key: "generalEditing", label: "General Video Editing" },
];


function App() {
  const [category, setCategory] = useState(categories[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      <HeroSection />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile category toggle */}
        <div className="flex items-center justify-between py-4 md:hidden">
          <span className="text-sm text-gray-400 uppercase tracking-widest font-semibold">
            Category
          </span>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 bg-[#1a1a1a] border border-[#2a2a2a] text-white text-sm px-4 py-2 rounded-lg"
          >
            <span className="text-[#FF0555]">☰</span>
            <span>{category.label}</span>
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-2 mb-4">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => {
                  setCategory(cat);
                  setMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  category.key === cat.key
                    ? "bg-[#FF0555] text-white"
                    : "bg-[#1a1a1a] text-gray-300 border border-[#2a2a2a] hover:border-[#FF0555]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Desktop layout */}
        <div className="flex gap-0 md:gap-6">
          <Sidebar
            setCategory={setCategory}
            active={category.key}
          />

          <div className="flex-1 min-w-0">
            <VideoGrid
              videos={videoData[category.key]}
              title={category.label}
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-10">
        <Banner />
      </div>
    </div>
  );
}

export default App;