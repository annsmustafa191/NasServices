"use client";
import { useState } from "react";

const Body = () => {
  const [currentLang, setCurrentLang] = useState("en");

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-12 py-12">
      {/* Partners Section */}
      <div className="flex justify-center mb-6">
        <img
          src="/home/Partners.png"
          alt="Partners"
          className="w-full max-w-[780px] h-auto"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-wrap items-center justify-center lg:justify-between mt-6">
        {/* Left Side */}
        <div className="max-w-lg space-y-4 mb-8 lg:mb-0 text-center lg:text-left">
          <p className="text-2xl sm:text-3xl font-semibold">
            {currentLang === "en"
              ? "Handle Your Employees Requests in a Simpler Way"
              : "إدارة طلبات موظفيك بطريقة أسهل"}
          </p>
          <p className="text-base sm:text-lg text-[#90A3B4]">
            {currentLang === "en"
              ? "You can accept, reject the requests from your employees including various request types!"
              : "يمكنك قبول أو رفض الطلبات من موظفيك بما في ذلك أنواع الطلبات المختلفة!"}
          </p>
          <div className="space-y-2 text-[#90A3B4]">
            {[
              { text: "Employee Request & Approvals", ar: "طلبات الموظفين والموافقات" },
              { text: "Employees Geolocation", ar: "موقع الموظفين" },
              { text: "Employees Attendance", ar: "حضور الموظفين" },
              { text: "Payroll Management", ar: "إدارة الرواتب" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center lg:justify-start space-x-2">
                <img
                  src="/home/feather_check-circle.png"
                  alt="Check Circle"
                  className="w-5 h-5"
                />
                <p>{currentLang === "en" ? item.text : item.ar}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-[#2D9596] font-semibold">
            {currentLang === "en"
              ? "Learn about Request Management"
              : "تعرف على إدارة الطلبات"}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center lg:ml-10">
          <img
            src="/home/pcc.svg"
            alt="PC"
            className="w-full max-w-[600px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
