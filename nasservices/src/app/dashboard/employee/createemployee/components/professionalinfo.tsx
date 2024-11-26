export default function ProfessionalInfo()
{
    return(
      <div className="flex flex-col ml-4">
        <div className="flex flex-row  ml-[-400px] ">
            <div className="text-[#444658]w-[200px]" >
                Position/Role <span className="text-red-500">*</span>
            </div>
            <div className="flex mt-[32px] ml-[-105px]">
                     <input
                     type="text"
                     placeholder="Select"
                      className="w-[290px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] "
                      ></input>
            </div>
            <div className="text-[#444658] ml-80 w-[200px]">
            Occupation on iqama <span className="text-red-500">*</span>
            </div>
            <div className="flex mt-[32px] ml-[-196px] ">
                     <input
                     type="text"
                     placeholder="Select"
                      className="w-[290px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></input>
            </div>  
        </div>
        <div className="flex flex-row mt-6  ml-[-400px] ">
            <div className="text-[#444658]w-[200px]" >
                Profession <span className="text-red-500">*</span>
            </div>
            <div className="flex mt-[32px] ml-[-90px]">
                     <input
                     type="text"
                     placeholder="Select"
                      className="w-[290px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] "
                      ></input>
            </div>
            <div className="text-[#444658] ml-80 w-[200px]">
            Designation <span className="text-red-500">*</span>
            </div>
            <div className="flex mt-[32px] ml-[-196px] ">
                     <input
                     type="text"
                     placeholder="Select"
                      className="w-[290px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      ></input>
            </div>  
        </div>
        <div className="text-[#444658] w-[200px] mt-6 ml-[-405px]"  >
               Work Background <span className="text-red-500">*</span>
            </div>
            <div className="flex mt-3 ml-[-405px]">
                     <input
                     type="text"
                     placeholder="Select"
                      className="w-[373px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] "
                      ></input>
            </div>
      </div>
    );
}