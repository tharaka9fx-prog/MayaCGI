import React from "react";

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

const Sidebar = ({ setCategory, active }) => {
  return (
    <aside className="hidden md:flex flex-col w-56 shrink-0 pr-4 pt-8">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-semibold px-1">
        Categories
      </p>
      <div className="flex flex-col gap-2">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setCategory(cat)}
            className={`w-full px-4 py-3 rounded-xl text-left text-sm font-medium border transition-all duration-200
              ${
                   active === cat.key
                   ? "bg-[#FF0555] border-[#FF0555] text-white shadow-lg shadow-[#FF0555]/20"
                    : "bg-[#141414] border-[#242424] text-gray-400 hover:border-[#FF0555]/50 hover:text-white hover:bg-[#1c1c1c]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;


