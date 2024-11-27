import { useState } from "react";

export default function PersonalInfo()
{
   
        const [gender, setGender] = useState("");
        const [limit, setLimit] = useState("")
    return(
        
        <div className="flex flex-col ml-[10px]">
          <div className="flex flex-row">
            <div className="flex flex-col ml-[-400px] ">
                <div className="text-[#444658] size-[16px]">
                    Nationality*
                </div>
                <div className="flex mt-[14px] ml-[-6px] ">
                    <input
                     type="text"
                     placeholder="Select Nationality"
                      className="w-[290px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></input>
                </div>
            </div>
            <div className="flex flex-col ml-80 ">
                <div className="text-[#444658] size-[16px]">
                    Address*
                </div>
                <div className="flex mt-[14px] ">
                    <input
                     type="text"
                     placeholder="Select Nationality"
                      className="w-[290px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></input>
                </div>
            </div>
            </div> 
    <div className="flex flex-row mt-5">
     <div className="flex flex-col ml-[-400px]">
         <div className="text-[#444658] size-[16px]">
           Religion*
            </div>
             <div className="flex mt-[14px] ml-[-6px] gap-5 ">
                <input
                type="text"
                 placeholder="Muslim"
                 className="w-[290px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
               ></input>
          </div>
        </div>
            <div className="flex flex-col ml-80 ">
                <div className="text-[#444658] w-44 size-[16px]">
                Marital Status *
                </div>
                <div className="flex mt-[14px] ml-[-6px] gap-5 ">
                    <input
                     type="text"
                     
                      className="w-[290px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></input>
                 </div>
             </div>
            </div> 
             
              
<div className="flex flex-row mt-5">
     <div className="flex flex-col ml-[-400px]">
         <div className="text-[#444658] size-[16px] w-20">
           Birth Date*
            </div>
             <div className="flex mt-[14px] ml-[-6px] gap-5 ">
                <input
                type="date"
                 placeholder="Muslim"
                 className="w-[290px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
               ></input>
          </div>
        </div>
            <div className="flex flex-col ml-80 ">
                <div className="text-[#444658] size-[16px] w-[200px]">
              Start Of Contract *
                </div>
                <div className="flex mt-[14px] ml-[6px] gap-5 ">
                    <input
                     type="date"
                     
                      className="w-[207px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></input>
                 </div>
             </div>
             <div className="flex flex-col ml-3 ">
                <div className="text-[#444658] size-[16px] w-[200px]">
              End Of Contract *
                </div>
                <div className="flex mt-[14px] ml-[6px] gap-5 ">
                    <input
                     type="date"
                     
                      className="w-[207px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></input>
                 </div>
             </div>  
         </div> 
         <div className="flex flex-row">
    <div className="flex flex-col ml-[-400px] mt-5">
      <label className="text-sm font-semibold text-gray-700">
        Gender <span className="text-[#444658]">*</span>
      </label>
      <div className="flex items-center space-x-4 mt-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
            className="w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500"
          />
          <span className="text-gray-800">Male</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
            className="w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500"
          />
          <span className="text-gray-800">Female</span>
        </label>
      </div>
    </div>
    <div className="flex flex-col ml-[450px] mt-5">
      <label className="text-sm font-semibold text-gray-700">
      Contract type <span className="text-[#444658]">*</span>
      </label>
      <div className="flex items-center space-x-4 mt-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            
            value="limit"
            checked={limit === "limit"}
            onChange={(e) => setLimit(e.target.value)}
            className="w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500"
          />
          <span className="text-gray-800">Limted</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
           
            value="unlimit"
            checked={limit === "unlimit"}
            onChange={(e) => setLimit(e.target.value)}
            className="w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500"
          />
          <span className="text-gray-800">Unlimited</span>
        </label>
      </div>
    </div>
  </div> 

</div>    
   
           
          
    )
}