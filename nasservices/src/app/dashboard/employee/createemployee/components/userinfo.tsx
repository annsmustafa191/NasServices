import { useState } from "react";

export default function UserInfo()
{
    const [fileName, setFileName] = useState("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        console.log(file?.name);
      };
      
    
    return(
       <div className="mt-1 flex felx-col ml-[10px]">
         <div className="flex flex-row">
            <div className="flex flex-col ml-[-400px]">
                <div className="text-[#444658] size-[16px] w-60">
                    Name <span className="text-red-500">*</span>
                </div>
                <div className="flex mt-[14px] ml-[-6px] gap-5 ">
                    <input
                     type="text"
                     placeholder="First name"
                      className="w-44 px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:[#444658]"
                      ></input>
                    <input
                     type="text"
                     placeholder="Last name"
                      className="w-44 px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:[#444658]"
                    ></input>
                </div>
            </div>      
          </div>
          <div className="flex flex-col mt-[99px] ml-[-400px]">
          <div className="text-[#444658] size-[16px] w-60">
                    Email <span className="text-red-500">*</span>
                </div>
            <div className="flex mt-[14px] ml-[-6px] gap-5 ">
                    <input
                     type="text"
                     placeholder="employee@nastecsol.com"
                      className="w-[375px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:[#444658]"
                    ></input>
            </div>
        </div>
            <div className="flex flex-col mt-[199px] ml-[-370px]">
             <div className="text-[#444658] size-[16px] w-60">
                    Password <span className="text-red-500">*</span>
                </div>
                  <div className="flex mt-[14px] ml-[-6px] gap-5 bg-[#ffffff]">
                    <input
                     type="upload"
                     placeholder="********"
                      className="  w-[375px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:[#444658]"
                    ></input>
                </div>
            </div>
            <div className="flex flex-col space-y-2 mt-[280px] ml-[-370px]">
                   <label htmlFor="file-upload" className="text-[#444658] size-[16px] mt-[18px] mb-[8px]">
                       Picture<span className="text-red-500">*</span>
                    </label>
                      <div className="mt-[14px] w-[375px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:[#444658]">
                           <label
                            
                            className="cursor-pointer">
                          </label>
                         <input
                       id="file-upload"
                        type="file"
                       accept="image/*"
                         onChange={handleFileChange} />                     
                       {fileName }
              </div>
          </div>
       </div>
    )
}