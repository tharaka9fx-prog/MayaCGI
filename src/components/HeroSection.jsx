import React from "react";
import Logo from "../assets/logo.png";
import Weav from "../assets/weav.png";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-[200px] sm:min-h-[240px]">
      {/* Wave background */}
      <img
        src={Weav}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70 pointer-events-none select-none"
      />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a0a] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-14">
        {/* Logo */}
        <img
          src={Logo}
          alt="MAYACGI"
          className="w-40 sm:w-52 md:w-64 mb-4 sm:mb-5"
        />

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
          <span className="text-[#FF0555]">Our Video</span>{" "}
          Editing Style{" "}
          <span className="text-[#FF0555]">Reference</span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 mt-3 sm:mt-4 max-w-xl text-sm sm:text-base leading-relaxed">
          Our editing style covers everything from social media reels and
          podcasts to event highlights. AI videos, motion graphics, and
          graphic design crafted to turn raw footage into powerful visual
          experiences.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
