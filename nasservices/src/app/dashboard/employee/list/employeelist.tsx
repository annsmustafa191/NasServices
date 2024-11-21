"use client";
import { SetStateAction, useEffect, useState } from "react";
import Cookies from 'js-cookie';

export default function EmployeeList() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState("Employee");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [data, setData] = useState<any[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const userId = localStorage.getItem('userid');
        if (!userId) {
          throw new Error('User ID not found in localStorage');
        }

        const token = Cookies.get('authToken');
        if (!token) {
          throw new Error('Authorization token not found in cookies');
        }

        const url = `http://localhost:3000/api/companies/user/${userId}`;

        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result.Data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleViewChange = (newView: SetStateAction<string>) => {
    setView(newView);
  };

  const [employees] = useState([
    {
      id: 1,
      iqama: 4000,
      name: "Lindsey Vetrov",
      position: "Chief Executive Officer",
      location: "Head Office",
      department: "Management",
      image: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      iqama: 4001,
      name: "Ashlyn Mango",
      position: "VP of Sales",
      location: "Head Office",
      department: "Management",
      image: "https://i.pravatar.cc/40?img=2",
    },
    {
      id: 3,
      iqama: 4000,
      name: "Lindsey Vetrov",
      position: "Chief Executive Officer",
      location: "Head Office",
      department: "Management",
      image: "https://i.pravatar.cc/40?img=1",
    },
  ]);

  const [owners] = useState([
    {
      id: "Lindsey Vetrovs",
      iqama: "NasTecSol",
      name: "example@yahoo.com",
      position: "+92-2938923",
      location: "street, area, Building, city.",
      department: "Ownership",
      image: "https://i.pravatar.cc/40?img=3",
    },
  ]);

  const tableData = view === "Employee" ? employees : owners;
  const addButtonLabel = view === "Employee" ? "+ Add New Employees" : "+ Add New User";

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="ml-[-30px] mt-[-31px] w-[104%] bg-white shadow-md rounded-lg p-4 sm:p-6 h-[706px]">
        <h1 className="text-[#444658] size-6 border-b-2 mb-6 font-bold">{view}</h1>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
          <div className="flex space-x-6">
            <button
              className={`font-semibold pb-1 ${view === "Employee"
                  ? "text-[#444658] border-b-2 border-[#444658]"
                  : "text-gray-600"
                }`}
              onClick={() => handleViewChange("Employee")}
            >
              Employee
            </button>
            <button
              className={`font-semibold pb-1 ${view === "Owner"
                  ? "text-[#444658] border-b-2 border-[#444658]"
                  : "text-gray-600"
                }`}
              onClick={() => handleViewChange("Owner")}
            >
              Owner
            </button>
          </div>
          <div className="flex space-x-4 mt-[-90px!important]">
            <button className="text-[#444658] font-medium px-4 py-2 hover:bg-gray-300 border border-[#444658] rounded-[12px]">
              Filters
            </button>
            <button className="bg-[#444658] text-white font-medium px-4 py-2 rounded-[17px] w-[240px]">
              {addButtonLabel}
            </button>
          </div>
        </div>
        <div className="overflow-hidden">
          <table className="min-w-full  bg-white border-t border-gray-200">
            <thead>
              <tr>
                <th className="px-2 sm:px-4 py-2 text-left text-[#444658] font-[500] border-b">
                  {view === "Employee" ? "Emp No." : "User Name"}
                </th>
                <th className="px-2 sm:px-4 py-2 text-left text-[#444658] font-[500] border-b">
                  {view === "Employee" ? "Iqama Number" : "Company"}
                </th>
                <th className="px-2 sm:px-4 py-2 text-left text-[#444658] font-[500] border-b">
                  {view === "Employee" ? "Employee Name" : "Email"}
                </th>
                <th className="px-2 sm:px-4 py-2 text-left text-[#444658] font-[500] border-b">
                  {view === "Employee" ? "Position" : "Phone No."}
                </th>
                <th className="px-2 sm:px-4 py-2 text-left text-[#444658] font-[500] border-b">
                  {view === "Employee" ? "Work Location" : "Address"}
                </th>
                {view === "Employee" && (
                  <>
                    <th className="px-2 sm:px-4 py-2 text-left text-[#444658] font-[500] border-b">
                      Department
                    </th>
                    <th className="px-2 sm:px-4 py-2 text-left text-[#444658] font-[500] border-b">
                      Actions
                    </th>
                  </>
                )}
              </tr>
            </thead>
            <tbody>
              {tableData.map((data) => (
                <tr key={data.id} className="hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 text-[#444658] font-[300] ">
                    {view === "Employee"
                      ? data.id.toString().padStart(2, "0")
                      : data.id}
                  </td>
                  <td className="px-2 sm:px-4 py-2  text-[#444658] font-[300]">
                    {view === "Employee" ? data.iqama : data.iqama}
                  </td>
                  <td className="px-2 sm:px-4 py-2  flex items-center space-x-3 text-[#444658] font-[300]">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                    />
                    <span className="text-sm sm:text-base">{data.name}</span>
                  </td>
                  <td className="px-2 sm:px-4 py-2  text-sm sm:text-base text-[#444658] font-[300]">
                    {view === "Employee" ? data.position : data.position}
                  </td>
                  <td className="px-2 sm:px-4 py-2  text-sm sm:text-base text-[#444658] font-[300]">
                    {view === "Employee" ? data.location : data.location}
                  </td>

                  {view === "Employee" && (
                    <>
                      <td className="px-2 sm:px-4 py-2  text-sm sm:text-base text-[#444658] font-[300]">
                        {data.department}
                      </td>
                      <td className="px-2 sm:px-4 py-2 relative">
                        <button
                          className="bg-[#444658] text-[#FFFFFF] font-[600] px-3 rounded h-[28px]"
                          onClick={toggleDropdown}
                        >
                          Action
                        </button>
                        {isOpen && (
                          <div className="absolute top-full  right-0 bg-white border border-gray-200 rounded shadow-lg z-10 w-[80px]">
                            <ul className="text-sm text-gray-700">
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">View</li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Update</li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Delete</li>
                            </ul>
                          </div>
                        )}
                      </td>

                    </>
                  )}

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}
