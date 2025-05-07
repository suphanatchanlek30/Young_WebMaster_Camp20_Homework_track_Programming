import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroComponent from './components/HeroComponent';

export default function Home() {
  return (
    <div className={`text-[20px] bg-[#190200] min-h-screen`}>
      <Navbar/>
      <HeroComponent/>
    </div>
  );
}
