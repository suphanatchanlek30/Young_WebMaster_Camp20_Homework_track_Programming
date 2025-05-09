"use client";
import { useState } from "react";


export default function NameAndLastName() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    

    return (
      <div className="flex flex-col items-center gap-4 text-center px-4 py-8">
        {/* Title */}
        <h1 className="text-[22px] md:text-[30px] font-bold text-white">
          ชื่อ นามสกุลที่สมัคร
        </h1>
        <p className="text-[14px] md:text-[18px] font-normal text-[#9B9B9B] max-w-md">
          The First Name and Last Names of the Applicants
        </p>
  
        {/* Input Fields */}
        <div className="flex flex-col md:flex-row gap-6 mt-6 w-full max-w-3xl justify-center">
          {/* First Name */}
          <div className="flex flex-col text-left text-white w-full md:w-[344px]">
            <label className="text-sm font-bold mb-2">
              First Name <span className="text-[#9B9B9B] text-xs font-medium">[ชื่อ]</span>
            </label>
            <input
              type="text"
              placeholder="Your First Name"
              className="bg-[#0F0F0F] border border-[#313131] rounded-md text-[16px] md:text-[18px] px-4 py-3 focus:outline-none"
        
            />
          </div>
  
          {/* Last Name */}
          <div className="flex flex-col text-left text-white w-full md:w-[344px]">
            <label className="text-sm font-bold mb-2">
              Last Name <span className="text-[#9B9B9B] text-xs font-medium">[นามสกุล]</span>
            </label>
            <input
              type="text"
              placeholder="Your Last Name"
              className="bg-[#0F0F0F] border border-[#313131] rounded-md text-[16px] md:text-[18px] px-4 py-3 focus:outline-none"
            />
          </div>
        </div>
  
        {/* Submit Button */}
        <button
        type="submit"
        className="mt-10 px-8 py-3 text-white font-semibold rounded-md hover:opacity-90 transition text-sm md:text-base"
        style={{
          backgroundImage: "linear-gradient(to left, #FFB623 0%, #FF691D 14%, #F52222 50%, #F81A64 100%)",
        }}
      >
        Submit
      </button>
      </div>
    );
  }
  