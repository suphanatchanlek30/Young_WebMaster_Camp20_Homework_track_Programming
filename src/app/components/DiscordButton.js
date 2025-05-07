import Image from "next/image";
import Icon_Button from "../../../public/Icon_Button_Navbar/discord.png";
import { athiti } from "../font";

export default function DiscordButton() {
  return (
    <a href="https://discord.gg/zjuU34Kh" target="_blank" rel="">
      <button
        className={`w-[140px] h-[64px] rounded-[8px] flex items-center justify-center gap-3 hover:opacity-90 text-white shadow-md`}
        style={{
          backgroundImage:
            "linear-gradient(to left, #FFB623 0%, #FF691D 14%, #F52222 50%, #F81A64 100%)",
        }}
      >
        <Image src={Icon_Button} alt="Discord" width={32} height={32} />
        <div className={`flex flex-col leading-tight text-center text-xs sm:text-sm font-semibold ${athiti.className}`}>
          <span>สอบถามราย</span>
          <span>ละเอียดเพิ่ม</span>
        </div>
      </button>
    </a>
  );
}
