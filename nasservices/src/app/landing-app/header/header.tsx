"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("en");

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const changeLang = (lang: string) => {
    setCurrentLang(lang);
    setDropdownOpen(false);
  };

  return (
    <header className="flex flex-wrap justify-between items-center bg-customGray text-white px-4 py-3 md:px-6 md:py-4">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="/home/logo.png"
          alt="Company Logo"
          className="w-24 h-auto md:w-32"
        />
      </div>

      {/* Login and Language Dropdown */}
      <div className="flex items-center space-x-4 mt-3 md:mt-0">
        {/* Language Dropdown */}
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="cursor-pointer flex items-center"
          >
            <img
              src="/home/translate.png"
              alt="Translate"
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </div>
          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 bg-white text-black shadow-md rounded-md py-2 w-28 md:w-32 z-50">
              <li
                onClick={() => changeLang("ar")}
                className="px-3 py-2 cursor-pointer hover:bg-gray-200 text-sm md:text-base"
              >
                العربية
              </li>
              <li
                onClick={() => changeLang("en")}
                className="px-3 py-2 cursor-pointer hover:bg-gray-200 text-sm md:text-base"
              >
                English
              </li>
            </ul>
          )}
        </div>

        {/* Login Button */}
        <Link href="/auth">
          <button className="px-3 py-2 bg-white rounded-md text-customGrayText text-sm md:text-base md:px-4 md:py-2">
            {currentLang === "en" ? "Login" : "تسجيل الدخول"}
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
