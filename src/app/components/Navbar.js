import Image from "next/image";
import Logo from "../../../public/Logo_Navbar/logo-ywc20-mono.png";
import DiscordButton from "./DiscordButton";

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`bg-black fixed w-full z-40`}>
      <div className={`flex items-center justify-between xl:container mx-auto transition-all px-8 py-4`}>
        <div className={`flex justify-between items-center gap-8`}>
          <a href="/">
            <Image src={Logo} alt="Logo" width={64} height={32} priority />
          </a>

          <div className={`lg:flex hidden gap-8 text-white font-sans-serif text-[16px]`}>
            <span onClick={scrollToTop} style={{ cursor: 'pointer' }}>Home</span> {/* ใช้ span และ onClick */}
            
          </div>
        </div>

        <div className={`flex items-center gap-4`}>
          <DiscordButton>
            <a href="https://discord.gg/zjuU34Kh" target="_blank" rel=""></a>
          </DiscordButton>
        </div>
      </div>
    </nav>
  );
}