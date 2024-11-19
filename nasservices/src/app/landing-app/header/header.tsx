
"use client";
import { useState } from "react";
const header =()=>{
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("en");
  
    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
    const changeLang = (lang: string) => {
      setCurrentLang(lang);
      setDropdownOpen(false);
    };
    return(
<header className="flex justify-between items-center bg-customGray text-white px-6 py-4">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="/home/logo.png"
          alt="Company Logo"
          width={100}
          height={50}
        />
      </div>

      {/* Login and Language Dropdown */}
      <div className="flex items-center space-x-4">
        {/* Language Dropdown */}
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="cursor-pointer flex items-center"
          >
            <img
              src="/home/translate.png"
              alt="Translate"
              width={20}
              height={20}
            />
          </div>
          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-md py-2 w-32">
              <li
                onClick={() => changeLang("ar")}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                العربية
              </li>
              <li
                onClick={() => changeLang("en")}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              >
                English
              </li>
            </ul>
          )}
        </div>

        {/* Login Button */}
        <button className="px-4 py-2 bg-white rounded-md text-customGrayText">
          {currentLang === "en" ? "Login" : "تسجيل الدخول"}
        </button>
      </div>
    </header>
    );
}
export default header;
