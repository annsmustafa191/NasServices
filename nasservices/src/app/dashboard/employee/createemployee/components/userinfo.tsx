import { useState } from "react";

export default function UserInfo()
{
  
    
    return(
       <div className="mt-1 flex felx-col ml-[10px]">
         <div className="flex flex-row">
            <div className="flex flex-col ml-[-400px]">
                <div className="text-[#444658] size-[16px]">
                    Name*
                </div>
                <div className="flex mt-[14px] ml-[-6px] gap-5 ">
                    <input
                     type="text"
                     placeholder="First name"
                      className="w-44 px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></input>
                    <input
                     type="text"
                     placeholder="Last name"
                      className="w-44 px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></input>
                </div>
            </div>      
          </div>
          <div className="flex flex-col mt-[99px] ml-[-400px]">
          <div className="text-[#444658] size-[16px]">
                    Email*
                </div>
            <div className="flex mt-[14px] ml-[-6px] gap-5 ">
                    <input
                     type="text"
                     placeholder="employee@nastecsol.com"
                      className="w-[375px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></input>
            </div>
        </div>
            <div className="flex flex-col mt-[199px] ml-[-370px]">
             <div className="text-[#444658] size-[16px]">
                    Password*
                </div>
                  <div className="flex mt-[14px] ml-[-6px] gap-5 bg-[#ffffff]">
                    <input
                     type="text"
                     placeholder="********"
                      className="  w-[375px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></input>
                </div>
            </div>
            <div className="flex flex-col mt-[299px] ml-[-370px]">
             <div className="text-[#444658] size-[16px]">
                    Picture*
                </div>
                <div className="flex mt-[14px] ml-[-6px] w-[375px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <img src="/company/file.png" width={20} height={20}></img>
                <p>  choose file    | no file choosen</p>
                </div> 
            </div>
       </div>
    )
}