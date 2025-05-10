"use client";
import { useState } from "react";

import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroComponent from './components/HeroComponent';
import Major from "./components/Major";
import InterviewerID from "./components/InterviewerID";
import FooterSection from "./components/Footer";

export default function Home() {
  const [selectedMajor, setSelectedMajor] = useState("");

  return (
    <div className={`text-[20px] bg-[#190200] min-h-screen`}>
      <Navbar />
      <HeroComponent />
      <Major selectedMajor={selectedMajor} setSelectedMajor={setSelectedMajor} />
      <InterviewerID selectedMajor={selectedMajor} />
      <FooterSection/>
    </div>
  );
}
