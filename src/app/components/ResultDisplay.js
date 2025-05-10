import Image from "next/image";
import Hero from "../../../public/Image_HomePage/Home_logo.svg";

const ResultModal = ({ result, onClose, selectedMajor }) => {
  const getMajorName = (majorValue) => {
    switch (majorValue) {
      case "web_design":
        return "Web Design track";
      case "web_programming":
        return "Web Programming track";
      case "web_marketing":
        return "Web Marketing track";
      case "web_content":
        return "Web Content track";
      default:
        return "Unknown Track";
    }
  };

  return (
    <div className={`fixed inset-0 bg-opacity-50 flex justify-center items-center m-4`}>
      <div className={`relative bg-white rounded-[32px] shadow-lg p-6 text-black mt-20 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl`}>
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 text-black hover:text-gray-300 focus:outline-none`}
          aria-label="Close modal"
        >
          <svg className={`h-5 w-5 sm:h-6 sm:w-6 fill-current`} viewBox="0 0 20 20">
            <path
              fillRule={`evenodd`}
              d={`M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z`}
              clipRule={`evenodd`}
            />
          </svg>
        </button>

        {/* Modal Content */}
        <div className={`flex flex-col items-center mb-0 rounded-lg p-4 sm:p-6`}>
          <div className={`bg-[#190200] rounded-2xl p-4 sm:p-8`}>
            <div className={`w-44 sm:w-32 md:w-68 h-auto relative`}>
              <Image
                src={Hero}
                alt={`YWC20 Logo`}
                className={`object-contain`}
                layout={`responsive`}
                width={1920}
                height={1080}
                priority
              />
            </div>
          </div>
        </div>

        {/* Content Based on Result */}
        {result.success ? (
          <div className={`flex flex-col items-center gap-2 sm:gap-3`}>
            <h2 className={`text-lg sm:text-xl md:text-2xl font-bold text-center text-[#190200]`}>
              Congratulations
            </h2>
            <p className={`text-lg sm:text-xl md:text-2xl text-center font-bold text-[#190200]`}>
              {result.data.firstName} {result.data.lastName}
            </p>
            <p className={`text-xs sm:text-sm md:text-base text-center font-medium text-[#190200]`}>
              Interviewee ID: {result.data.interviewRefNo}
            </p>
            <p className={`text-sm sm:text-base md:text-lg text-center font-bold text-[#190200] mb-4`}>
              You&apos;ve qualified in the interview round in the <br />
              <span className={`font-bold`}>
                {getMajorName(result.data.major)}
              </span>{" "}
              🎉 <br />
              for Young Webmaster Camp 20
            </p>
            <div className={`text-center`}>
              <button
                className={`text-white text-xs sm:text-sm font-semibold py-2 px-4 rounded-[8px] focus:outline-none focus:shadow-outline`}
                style={{
                  backgroundImage:
                    `linear-gradient(to left, #FFB623 0%, #FF691D 14%, #F52222 50%, #F81A64 100%)`,
                }}
                onClick={() => {
                  // Uncomment below line if you want to open resume or any other link
                  // window.open(result.data.resume, "_blank");
                  alert('More details button clicked!');
                }}
              >
                More Details
              </button>
            </div>
          </div>
        ) : (
          <div className={`flex flex-col items-center gap-3 sm:gap-4`}>
            <h2 className={`text-lg sm:text-xl md:text-2xl text-center font-bold text-[#190200] mb-2`}>
              We are sorry to inform you that you have not been chosen.
            </h2>
            <p className={`text-sm sm:text-base md:text-lg text-center font-bold text-[#190200]`}>
              คุณไม่ได้ผ่านการสัมภาษณ์ <br />
            </p>
            <p className={`text-xs sm:text-sm md:text-base text-center text-gray-600`}>
              Thank you for your interest in the Young Webmaster Camp 20. We
              appreciate the time and effort you put into your application. <br />
              We wish you all the best in your future endeavors.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultModal;
