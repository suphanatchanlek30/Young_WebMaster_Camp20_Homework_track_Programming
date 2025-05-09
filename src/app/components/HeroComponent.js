import Hero from "../../../public/Image_HomePage/Home_logo.svg";
import Image from 'next/image';


export default function HeroComponent() {
    return (
        <div className={`flex flex-col md:flex-col justify-center items-center gap-10 pt-[128px] mb-[100px]`}>
            <Image src={Hero} alt="Hero" className={`w-[300px] md:w-[315px] h-[166px] md:h-[166px]`} priority />
            <div className={`flex flex-col items-center gap-2 text-center`}>
                <h1 className={`text-[22px] md:text-[30px] font-bold text-white`}>
                    ประกาศผลการสมัครค่าย Young Webmaster Camp ครั้งที่ 20
                </h1>
                <p className={`text-[14px] md:text-[18px] font-normal text-[#9B9B9B]`}>
                    The announcement of the results for the Young Webmaster Camp 20
                </p>
            </div>
        </div>
    );
}