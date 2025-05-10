import Hero from "../../../public/Image_HomePage/Home_logo.svg";
import Image from "next/image";

export default function HeroComponent() {
  return (
    <div
      className={`flex flex-col md:flex-col justify-center items-center gap-10 pt-[128px] mb-[10px] md:mb-[100px] p-4`}
    >
      <div className={`w-[300px] md:w-[315px] h-[166px] md:h-[166px] relative`}>
        <Image
          src={Hero}
          alt="Hero"
          className={`object-contain`}
          width={315}
          height={166}
          sizes={`(max-width: 768px) 80vw, 315px`}
          priority
        />
      </div>
      <div
        className={`flex flex-col items-center md:items-center text-center gap-3`}
      >
        <h1
          className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white`}
        >
          ประกาศผลการสมัครค่าย Young Webmaster Camp ครั้งที่ 20
        </h1>
        <p
          className={`text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#9B9B9B] text-center`}
        >
          The announcement of the results for the Young Webmaster Camp 20
        </p>
      </div>
    </div>
  );
}
