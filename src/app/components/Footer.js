import Footer_logo from "../../../public/Footer/footer.svg";
import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className={`bg-black text-white py-4 px-6`}>
      <div className={`flex items-center justify-between xl:container mx-auto transition-all px-4 py-2`}>
        <div className={`flex items-center space-x-4`}>
          <Image 
            src={Footer_logo} 
            alt="Logo" 
            width={84} 
            height={32} 
            priority 
          />
        </div>
      </div>
    </footer>
  );
}
