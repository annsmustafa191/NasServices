"use client";
import Footer from '../footer/footer';
import React, { useState } from 'react';
import Header from '../header/header'
import Body from './body'

const homePage = ()=>{
    const [currentLang, setCurrentLang] = useState("en");

    return(

        <div>
            <Header />
            <div>
      {/* Content Section */}
      <div className="flex flex-wrap justify-between items-center px-6 py-12 bg-customGray">
        {/* Left Side */}
        <div className="max-w-lg space-y-4 mt-[-225px] ml-[23px] ">
        <h1 className="text-[3.25rem] leading-[3.5rem] font-bold text-white w-[507px] mt-[17px]">
            <span>{currentLang === "en" ? "We help you" : "نساعدك"}</span>
            <br />
            <span>{currentLang === "en" ? "grow your business" : "تنمية عملك"}</span>
            <br />
            <span>{currentLang === "en" ? "faster" : "بسرعة"}</span>
          </h1>
          <img
            src="/home/faster.png"
            alt="Vector"
            width={190}
            height={95}
          />
          <p className="text-lg  text-white">
            {currentLang === "en"
              ? "HR Lite is a software built to help companies manage their systems more easily."
              : "NasHR هو برنامج إدارة الموارد البشرية الذي يشمل الحضور والرواتب وأكثر من ذلك بكثير."}
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-2 bg-white text-[#2D9596]">
              {currentLang === "en" ? "See how it works" : "شاهد كيف يعمل"}
            </button>
            <button className="px-6 py-2 border border-[#ffffff] text-[#ffffff] rounded-md ">
              {currentLang === "en" ? "Request A Call" : "طلب مكالمة"}
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex mr-[-19px] mt-[-20px] ">
          <img
            src="/home/main-pc.svg"
            alt="Dashboard"
            width={currentLang === "en" ? 823 : 500}
            height={currentLang === "en" ? 660 : 300}
          />
        </div>
      </div>

      {/* White Section */}
       <div>
        <Body/>
       </div>

      {/* Features Section */}
      <div className="bg-[rgba(45,149,150,0.12)] text-customGrayText px-6 py-12">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-semibold mt-[-44px]">
            {currentLang === "en" ? "Features" : "الميزات"}
          </h2>
          <p className="leadig-[32px] text-[#2D9596] size-[16px] w-[700px] h-[17px] mt-[3px]  ml-[400px]">
            {currentLang === "en"
              ? "Ditch manual tasks! Our HRMS software simplifies workflows, reduces errors, and saves time. Focus on your team’s success while automation handles the routine."
              : "تخلص من المهام اليدوية! برنامج إدارة الموارد البشرية لدينا يبسط سير العمل، يقلل الأخطاء، ويوفر الوقت. ركز على نجاح فريقك بينما يتولى الأتمتة المهام الروتينية."}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] ml-[84px] mt-[80px]">
  {[
    {
        
      icon: "/home/features-attend.png",
      title: "Attendance",
      text: "Monitor check-ins, absences, and leave with ease. Simplify management and get a clear overview in real time.",
      ar: "الحضور",
    },
    {
      icon: "/home/features-req.png",
      title: "Requests & Approvals",
      text: "Easily track and manage requests and approvals. Simplify workflows and ensure timely decisions with our intuitive module.",
      ar: "الطلبات والموافقات",
    },
    {
      icon: "/home/features-pay.png",
      title: "Payroll",
      text: "Automate payroll processing, manage salaries, and ensure accuracy with ease.",
      ar: "الرواتب",
    },
    {
      icon: "/home/features-asset.png",
      title: "Assets Management",
      text: "Track and manage assets effortlessly. Simplify inventory and ensure accurate records with ease.",
      ar: "إدارة الأصول",
    },
  ].map((feature, index) => (
    <div
      key={index}
      className="bg-[#ffffff] shadow-even-shadow rounded-md p-6 text-center space-y-4 w-[260px] h-[300px] ml-[46px] transition-transform duration-300 ease-in-out hover:translate-y-[-10px]"
    >
      <img
        src={feature.icon}
        alt={feature.title}
        width={50}
        height={50}
        className="ml-[77px]"
      
      />
      <h3 className="text-xl font-semibold">
        {currentLang === "en" ? feature.title : feature.ar}
      </h3>
      <p>{currentLang === "en" ? feature.text : "card description"}</p>
    </div>
  ))}
</div>

      </div>
 {/* Our product */}
  <div className="bg-white mb-[50px]">
  <div className="text-customGrayText text-[36px] font-bold text-center mb-[2px] px-6 py-1">
     Our Products
  </div>
 
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-[173px] mt-[30px]">
    
    <div className="bg-[#ffffff] p-6 rounded-lg w-[260px] h-[340px] shadow-even-shadow transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">
      <img className="w-[75%] h-[27%] ml-[28px] mt-[2px]object-cover mb-4" src="/home/nashr-logo.png" alt="Product 1" />
      <p className="text-customGrayText text-[14px] font-[700] text-center mb-[13px]">Nas-HR</p>
      <p className="text-center text-[#2D9596]">A Human Resource Management System web and mobile applications, o.</p>
    </div>

   
    <div className="bg-[#ffffff] p-6 rounded-lg w-[260px] h-[340px] shadow-even-shadow transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">

      <img className="w-[91%] h-[20%] ml-[20px] object-cover mb-4" src="/home/maker4U.png" alt="Product 2" />
      <p className="text-customGrayText text-[14px] font-[700] text-center mb-[13px]">Maker 4 U</p>
      <p className="text-center text-[#2D9596]">All-in-one solution for creating magnetic promotional products and much more!.</p>
    </div>

    
    <div className="bg-[#ffffff] p-6 rounded-lg w-[260px] h-[340px] shadow-even-shadow transition-transform duration-300 ease-in-out hover:translate-y-[-10px]">

      <img className="w-[32%] h-[25%] ml-[68px] object-cover  mb-4" src="/home/n-c0llect.png" alt="Product 3" width={5} height={5} />
      <p className="text-customGrayText text-[14px] font-[700] text-center mb-[13px]">N-Collect</p>
      <p className="text-center text-[#2D9596]">A Cash Collection App build to help businesses..</p>
    </div>
  </div>
</div>
    </div>
            <Footer />
        </div>
     
    );
};
export default homePage;