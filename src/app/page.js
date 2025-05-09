import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroComponent from './components/HeroComponent';
import Major from "./components/Major";
import NameAndLastName from "./components/NameAndLastName";

export default function Home() {
  return (
    <div className={`text-[20px] bg-[#190200] min-h-screen`}>
      <Navbar/>
      <HeroComponent/>
      <Major/>
      <NameAndLastName/>
    </div>
  );
}
