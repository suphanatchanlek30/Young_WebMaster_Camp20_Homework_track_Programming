import React from "react";
import Image from "next/image";
import Logo from "../../../public/Logo_Navbar/logo-ywc20-mono.png";

const ResultModal = ({ result, onClose, selectedMajor }) => {
  const getMajorName = (majorValue) => {
    switch (majorValue) {
      case "design":
        return "Web Design track";
      case "programming":
        return "Web Programming track";
      case "marketing":
        return "Web Marketing track";
      case "content":
        return "Web Content track";
      default:
        return "";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-[#1E1E1E] rounded-lg shadow-lg p-8 text-white w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 focus:outline-none"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="flex flex-col items-center mb-4">
          <div className="w-32 h-auto relative">
            <Image src={Logo} alt="YWC20 Logo" layout="responsive" objectFit="contain" />
          </div>
        </div>

        {result.success ? (
          <>
            <h2 className="text-xl font-bold text-center mb-2">Congratulations</h2>
            <p className="text-lg text-center mb-4">{result.data.firstName} {result.data.lastName}</p>
            <p className="text-center mb-4">
              You've qualified for the interview round in the <br />
              <span className="font-semibold">{getMajorName(result.data.major)}</span> 🎉 <br />
              for Young Webmaster Camp 20
            </p>
            <div className="text-center">
              <button
                className="bg-[#FF691D] hover:bg-[#D24E0A] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                  alert("ไปยังหน้ารายละเอียดการสัมภาษณ์");
                }}
              >
                Interview Details
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold text-center mb-4">เสียใจด้วย</h2>
            <p className="text-lg text-center mb-4">
              ไม่พบข้อมูลผู้สมัครด้วยเลขประจำตัว <br />
              <span className="font-semibold">{result.interviewRefNo}</span> <br />
              ในสาขา <span className="font-semibold">{getMajorName(selectedMajor)}</span>
            </p>
            <p className="text-center text-gray-400 text-sm">
              กรุณาตรวจสอบเลขประจำตัวและสาขาที่เลือกอีกครั้ง หรือติดต่อทีมงาน YWC20 หากมีข้อสงสัย
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultModal;