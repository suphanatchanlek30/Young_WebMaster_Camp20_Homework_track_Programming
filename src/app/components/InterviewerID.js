"use client";

import { useState, useEffect } from "react";
import ResultModal from "./ResultDisplay";

const validMajors = ["design", "programming", "marketing", "content"];

export default function InterviewerID({ selectedMajor }) {
  const [interviewRefNo, setInterviewRefNo] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMajorValid, setIsMajorValid] = useState(false);

  useEffect(() => {
    setIsMajorValid(validMajors.includes(selectedMajor));
  }, [selectedMajor]);

  const handleInputChange = (e) => {
    setInterviewRefNo(e.target.value.toUpperCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isMajorValid) {
      setError("กรุณาเลือกสาขาที่ถูกต้อง");
      return;
    }

    setIsLoading(true);
    setSearchResult(null);
    setError(null);

    try {
      const response = await fetch(
        "https://api.ywc20.ywc.in.th/homework/candidates",
        {
          headers: {
            "x-reference-id": "PG15",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const candidatesInMajor = data[selectedMajor];

      if (candidatesInMajor) {
        const foundCandidate = candidatesInMajor.find(
          (candidate) =>
            candidate.interviewRefNo.toUpperCase() === interviewRefNo
        );

        if (foundCandidate) {
          setSearchResult({
            success: true,
            data: foundCandidate,
          });
        } else {
          setSearchResult({
            success: false,
            interviewRefNo: interviewRefNo,
          });
        }
        setIsModalOpen(true);
      } else {
        setSearchResult({
          success: false,
          interviewRefNo: interviewRefNo,
        });
        setIsModalOpen(true);
      }
    } catch (err) {
      setError("เกิดข้อผิดพลาดในการเชื่อมต่อ API");
      console.error("API Error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSearchResult(null);
    setError(null); // ล้าง error เมื่อปิด Modal
  };

  return (
    <div className={`flex flex-col items-center gap-4 text-center px-4 py-8`}>
      <h1 className={`text-[22px] md:text-[30px] font-bold text-white`}>
        ตรวจสอบผลการสมัคร
      </h1>
      <p className={`text-[14px] md:text-[18px] font-normal text-[#9B9B9B] max-w-md`}>
        กรุณากรอกเลขประจำตัวผู้เข้าสัมภาษณ์ (Interviewer ID)
        เพื่อตรวจสอบผลการสมัครในสาขาที่เลือก
      </p>

      <form
        onSubmit={handleSubmit}
        className={`flex flex-col md:flex-row gap-6 mt-6 w-full max-w-3xl justify-center`}
      >
        <div className={`gap-12 flex flex-col text-left text-white w-full md:w-[344px] justify-center items-center `}>
          <div className={`flex flex-col text-left text-white w-full md:w-[344px]`}>
            <label className={`text-sm font-bold mb-2`} htmlFor="interviewRefNo">
              เลขประจำตัวผู้เข้าสัมภาษณ์
            </label>
            <input
              type="text"
              id="interviewRefNo"
              placeholder="PG01"
              className={`bg-[#0F0F0F] border border-[#313131] rounded-md text-[16px] md:text-[18px] px-4 py-3 focus:outline-none`}
              value={interviewRefNo}
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full md:w-[140px] h-[54px] text-white font-semibold rounded-md hover:opacity-90 transition text-sm md:text-base`}
            style={{
              backgroundImage:
                "linear-gradient(to left, #FFB623 0%, #FF691D 14%, #F52222 50%, #F81A64 100%)",
            }}
            disabled={isLoading || !isMajorValid} // Disable ปุ่มถ้ายังไม่ได้เลือก Major ที่ถูกต้อง
          >
            {isLoading ? "กำลังตรวจสอบ..." : "ตรวจสอบ"}
          </button>
        </div>
      </form>

      {!selectedMajor && (
        <p className={`mt-4 text-yellow-500 font-bold text-sm md:text-base`}>
          กรุณาเลือกสาขาที่สมัครก่อนทำการตรวจสอบ
        </p>
      )}

      {error && <div className={`mt-4 text-red-500 font-semibold`}>{error}</div>}

      {isModalOpen && searchResult && (
        <ResultModal
          result={searchResult}
          onClose={closeModal}
          selectedMajor={selectedMajor}
        />
      )}
    </div>
  );
}
