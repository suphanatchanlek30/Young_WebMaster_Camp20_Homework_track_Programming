"use client";

import { useState } from "react";

export default function Major({ selectedMajor, setSelectedMajor }) {
  const majors = [
    { label1: "Web", label2: "Design", value: "design" },
    { label1: "Web", label2: "Programming", value: "programming" },
    { label1: "Web", label2: "Marketing", value: "marketing" },
    { label1: "Web", label2: "Content", value: "content" },
  ];

  return (
    <div className="flex flex-col items-center text-center px-4 py-10 mb-[100px]">
      {/* Title */}
      <h1 className="text-[22px] md:text-[30px] font-bold text-white">
        สาขาที่สมัคร
      </h1>
      <p className="text-[14px] md:text-[18px] font-normal text-[#9B9B9B]">
        Majors
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-24 mt-8">
        {majors.map((major) => (
          <button
            key={major.value}
            onClick={() => setSelectedMajor(major.value)}
            className={`w-[140px] h-[64px] rounded-[10px] flex flex-col items-center justify-center text-white shadow-md transition-all duration-200 hover:opacity-90 text-xs sm:text-sm font-semibold tracking-wide ${
              selectedMajor === major.value
                ? "ring-4 ring-white/10 scale-105"
                : "opacity-80"
            }`}
            style={{
              backgroundImage:
                "linear-gradient(to left, #FFB623 0%, #FF691D 14%, #F52222 50%, #F81A64 100%)",
            }}
          >
            <span>{major.label1}</span>
            <span>{major.label2}</span>
          </button>
        ))}
      </div>
    </div>
  );
}