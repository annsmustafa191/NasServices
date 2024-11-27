import { useState } from "react";

export default function EmployeeAttachments()
{
    const [fileName, setFileName] = useState("");
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        console.log(file?.name);
      };
    return(
       <div className="flex flex-col">
        <div className="flex flex-row">
        <div className="flex flex-col ml-[-400px]">
            <div className="text-[#444658] ml-[10px]">
                Name <span className="text-red-500">*</span>
            </div>
            <div>
                     <input
                     type="text"
                     placeholder="Enter Attachment Name"
                      className=" mt-[8px] w-[293px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] "
                      ></input>
            </div>
           </div>
           <div className="flex flex-col ml-[30px]">
            <div className="text-[#444658] ml-[10px]">
                Type <span className="text-red-500">*</span>
            </div>
            <div>
                     <input
                     type="text"
                     placeholder="Enter Attachment Type"
                      className=" mt-[8px] w-[293px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] "
                      ></input>
            </div>
           </div>
           <div className="flex flex-col ml-[30px]">
            <div className="text-[#444658]  ml-[10px]">
                Expiry <span className="text-red-500">*</span>
            </div>
            <div>
                     <input
                     type="date"
                     placeholder="Select Date"
                      className="mt-[8px] w-[293px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] "
                      ></input>
            </div>
           </div>
         </div>  
         <div className="flex flex-row mt-[15px]">
        <div className="flex flex-col ml-[-400px]">
            <div className="text-[#444658] ml-[10px]">
            <label htmlFor="file-upload" className="text-[#444658] size-[16px] mt-[18px] mb-[8px]">
                      Document<span className="text-red-500">*</span>
                    </label>
                      <div className="mt-[14px] w-[280px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:[#444658]">
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
           <div className="flex flex-col ml-[30px]">
            <div className="text-[#444658] ml-[10px]">
                Reminder Name <span className="text-red-500">*</span>
            </div>
            <div>
                     <input
                     type="text"
                     placeholder="Expiry is Near"
                      className=" mt-[8px] w-[293px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] "
                      ></input>
            </div>
           </div>
           <div className="flex flex-col ml-[30px]">
            <div className="text-[#444658]  ml-[10px]">
                Select Date & Time <span className="text-red-500">*</span>
            </div>
            <div>
                     <input
                     type="date"
                     placeholder="Select Date"
                      className="mt-[8px] w-[293px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] "
                      ></input>
            </div>
           </div>
         </div> 
                 <div className="ml-[-400px] mt-[20px]">
                     <input
                     type="text"
                     placeholder="+ Add attachment"
                      className=" bg-[#444658] mt-[8px] w-[210px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] "
                      ></input>
               </div>
       </div>
    );
}