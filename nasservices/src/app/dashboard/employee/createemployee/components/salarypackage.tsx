import shadows from "@mui/material/styles/shadows";

export default function SalaryPackage ()
{
    return(
       <div className="flex flex-row mt-[-10px]">
        <div className=" bg-[#ffffff] p-4 ml-[-380px] rounded-[42px] shadow-even-shadow w-[510px] h-[200px]">
         <div className="bg-[#DFEFEF] rounded-[50px]  w-[120px] h-[120px] mt-[30px]">   
         </div>
         <p className="text-[#444658] size-17 ml-[50px] mt-[-80px] font-bold  "> AR</p>
         <div className="flex flex-col w-[440px] mt-[-50px] ml-[140px]">
            <p className=" text-[#444658] size-5 font-semibold w-48 "> Ali Rana</p>
            <p className="text-[#616161] size-4 font-medium w-80 mt-1">Customer Success Manager </p>
            <p className=" text-[#616161] size-4 font-medium w-80 mt-2"> IT Solutions</p>
         </div>
         <div className="mt-[-68px] ml-[440px]">
            <img src="/employee/edit.png" width={13} height={13}></img>
        </div>
        </div>
       <div className="flex flex-col mt-[-10px] ml-[470px]">
       <div className="text-[#444658] w-[200px] mt-6 ml-[-405px]"  >
               Effective on <span className="text-red-500">*</span>
            </div>
            <div className="flex mt-3 ml-[-405px]">
                     <input
                     type="date"
                     placeholder="Select Date"
                      className="w-[281px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] "
                      ></input>
            </div>
           <div className="flex flex-row mt-[-12px]">
           <div className="text-[#444658] w-[200px] mt-6 ml-[-405px]"  >
               Basic Salary <span className="text-red-500">*</span>
            </div>
            <div className="flex mt-16 ml-[-205px]">
                     <input
                     type="text"
                     placeholder="0.00"
                      className="w-[281px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] "
                      ></input>
            </div>
            <div className="text-[#444658] w-[200px] mt-6 ml-[40px]"  >
               Currency <span className="text-red-500">*</span>
            </div>
            <div className="flex mt-16 ml-[-200px]">
                     <input
                     type="text"
                     placeholder="Saudi Riyal - SAR - ر.س "
                      className="w-[281px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-[#444658] "
                      ></input>
            </div>
            </div> 
       </div>
       
       </div>
    );
}