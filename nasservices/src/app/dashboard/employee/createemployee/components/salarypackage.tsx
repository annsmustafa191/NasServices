import shadows from "@mui/material/styles/shadows";

export default function SalaryPackage ()
{
    return(
       <div className="flex flex-row">
        <div className=" bg-[#ffffff] p-4 ml-[-380px] rounded-[42px] shadow-even-shadow w-[510px] h-[200px]">
         <div className="bg-[#DFEFEF] rounded-[50px]  w-[120px] h-[120px] mt-[30px]">
             <p className="text-[#444658] size-11"> AR</p>
         </div>
        </div>
       </div>
    );
}