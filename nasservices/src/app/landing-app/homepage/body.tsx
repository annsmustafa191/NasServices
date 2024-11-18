"use client";
import { useState } from "react";

const body = ()=>{
    const [currentLang, setCurrentLang] = useState("en");
return(
<div className="bg-white px-6 py-12">
        <div className="flex justify-center mb-6 mt-[-30px]">
          <img src="/home/Partners.png" alt="Partners" width={780} height={370} />
        </div>
        <div className="flex flex-wrap justify-between items-center mt-[-35px]">
          {/* Left Side */}
          <div className="max-w-lg space-y-4 mt-[-49px] ml-[20px]">
            <p className="text-3xl font-semibold">
              {currentLang === "en"
                ? "Handle Your Employees Requests in a Simpler Way"
                : "إدارة طلبات موظفيك بطريقة أسهل"}
            </p>
            <p className="text-lg text-[#90A3B4]">
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
                <div key={index} className="flex items-center space-x-2">
                  <img
                    src="/home/feather_check-circle.png"
                    alt="Check Circle"
                    width={20}
                    height={20}
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
          <div className="flex justify-center mr-[27px] mt-[18px]">
            <img
              src="/home/pcc.svg"
              alt="PC"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
);
}
export default body;