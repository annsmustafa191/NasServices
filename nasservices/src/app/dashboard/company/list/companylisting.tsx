"use client";
import { useState } from "react";
export default function CompanyListing()
{const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  const [companies] = useState([
    {
      id: 42839,
      iqama: "NasTecSol",
      name: "Nassar ibn Ibrahim",
      position: "Islamabad, Pakistan",
      location: "+92 23239332",
      department: "Broadway Complex, 1st floor, Gulberg Greens.",
     
    },
    {
      id: 34897,
      iqama: "Nas-HR",
      name: "Nassar ibn Ibrahimo",
      position: "Tabuk, Saudi Arabia",
      location: "+966 8283222",
      department: "building no 3, tabuk",
      
    },
    {
        id: 42849,
        iqama: "NasTecSol",
        name: "Nassar ibn Ibrahim",
        position: "Islamabad, Pakistan",
        location: "+92 23239332",
        department: "Broadway Complex, 1st floor, Gulberg Greens.",
       
      },
      {
        id: 34867,
        iqama: "Nas-HR",
        name: "Nassar ibn Ibrahimo",
        position: "Tabuk, Saudi Arabia",
        location: "+966 8283222",
        department: "building no 3, tabuk",
        
      },
      {
        id: 42859,
        iqama: "NasTecSol",
        name: "Nassar ibn Ibrahim",
        position: "Islamabad, Pakistan",
        location: "+92 23239332",
        department: "Broadway Complex, 1st floor, Gulberg Greens.",
       
      },
      {
        id: 34817,
        iqama: "Nas-HR",
        name: "Nassar ibn Ibrahimo",
        position: "Tabuk, Saudi Arabia",
        location: "+966 8283222",
        department: "building no 3, tabuk",
        
      },
      {
        id: 42809,
        iqama: "NasTecSol",
        name: "Nassar ibn Ibrahim",
        position: "Islamabad, Pakistan",
        location: "+92 23239332",
        department: "Broadway Complex, 1st floor, Gulberg Greens.",
       
      },
      {
        id: 34887,
        iqama: "Nas-HR",
        name: "Nassar ibn Ibrahimo",
        position: "Tabuk, Saudi Arabia",
        location: "+966 8283222",
        department: "building no 3, tabuk",
        
      },
      {
        id: 42899,
        iqama: "NasTecSol",
        name: "Nassar ibn Ibrahim",
        position: "Islamabad, Pakistan",
        location: "+92 23239332",
        department: "Broadway Complex, 1st floor, Gulberg Greens.",
       
      },
      {
        id: 31897,
        iqama: "Nas-HR",
        name: "Nassar ibn Ibrahimo",
        position: "Tabuk, Saudi Arabia",
        location: "+966 8283222",
        department: "building no 3, tabuk",
        
      },
    ]);
    return(
        <div className="min-h-screen bg-gray-100 p-8">
         <div className=" ml-[-30px] mt-[-31px] w-[104%] bg-white shadow-md rounded-lg  h-[720px] p-4 sm:p-6">
         <h1 className="text-[#444658] size-6 border-b-2 mb-6 font-bold">Companies</h1>
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-6">
           
            </div>
            <div className="flex space-x-4 mt-[-90px!important]">
            <button className=" text-[#444658] font-medium px-4 py-2  hover:bg-gray-300 border border-[#444658] rounded-[12px] ">
                Filters
              </button>
              <button className="bg-[#444658] text-white font-medium px-4 py-2 rounded-[17px] w-[240px]">
                + Register New Company
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-t border-gray-200">

              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                  CR no.
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                  Company Namer
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                  Owner
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                  Location
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                  Phone No
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                  Address
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 font-semibold border-b">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {companies.map((emp) => (
                  <tr key={emp.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 ">{emp.id.toString().padStart(2, "0")}</td>
                    <td className="px-4 py-2 ">{emp.iqama}</td>
                    <td className="px-4 py-2  flex items-center space-x-3">
                      
                      <span>{emp.name}</span>
                    </td>
                    <td className="px-4 py-2 ">{emp.position}</td>
                    <td className="px-4 py-2 ">{emp.location}</td>
                    <td className="px-4 py-2 ">{emp.department}</td>
                    <td className="px-4 py-2 ">
                      <button className=" text-gray-800 font-medium px-3 py-1 border-b">
                      View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}