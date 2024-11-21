"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function EmployeeList() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState("Employee");
  const [data, setData] = useState<any[]>([]);
  const [employees, setEmployees] = useState<any[]>([]);
  const [owners, setOwners] = useState<any[]>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = localStorage.getItem("userid");
        if (!userId) {
          throw new Error("User ID not found in localStorage");
        }

        const token = Cookies.get("authToken");
        if (!token) {
          throw new Error("Authorization token not found in cookies");
        }

        const url = `http://localhost:3000/api/companies/user/${userId}`;

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result.Data);

        const extractedEmployees: any[] = [];
        const extractedOwners: any[] = [];

        const uniqueOwners = new Set();

        result.Data.forEach((company: any) => {
          company.employees.forEach((emp: any) => {
            extractedEmployees.push({
              id: emp._id,
              iqama: emp.iqamaNumber,
              name: `${emp.firstName} ${emp.lastName}`,
              position: emp.role,
              location: company.companyInfo?.address || "N/A",
              department: emp.profession,
              image: company.companyInfo?.companyLogo || "https://via.placeholder.com/40",
            });
          });

          company.ownership.forEach((owner: any) => {
            const normalizedUserID = owner.userID?.trim().toLowerCase();
            if (normalizedUserID && !uniqueOwners.has(normalizedUserID)) {
              uniqueOwners.add(normalizedUserID);
              extractedOwners.push({
                id: normalizedUserID,
                iqama: company.companyInfo?.name || "N/A",
                name: owner.userName || "N/A",
                position: company.companyInfo?.phoneNumber || "N/A",
                location: company.companyInfo?.address || "N/A",
                department: "Ownership",
                image: company.companyInfo?.companyLogo || "https://via.placeholder.com/40",
              });
            }
          });
        });

        setEmployees(extractedEmployees);
        setOwners(extractedOwners);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleViewChange = (newView: string) => {
    setView(newView);
  };

  const tableData = view === "Employee" ? employees : owners;
  const addButtonLabel = view === "Employee" ? "+ Add New Employee" : "+ Add New User";

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="ml-[-30px] mt-[-31px] w-[104%] bg-white shadow-md rounded-lg p-4 sm:p-6 h-[706px]">
        <h1 className="text-[#444658] size-6 border-b-2 mb-6 font-bold">{view}</h1>
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-4 sm:space-y-0">
          <div className="flex space-x-6">
            <button
              className={`font-semibold pb-1 ${view === "Employee" ? "text-[#444658] border-b-2 border-[#444658]" : "text-gray-600"
                }`}
              onClick={() => handleViewChange("Employee")}
            >
              Employee
            </button>
            <button
              className={`font-semibold pb-1 ${view === "Owner" ? "text-[#444658] border-b-2 border-[#444658]" : "text-gray-600"
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
          <table className="min-w-full bg-white border-t border-gray-200">
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
                  <th className="px-2 sm:px-4 py-2 text-left text-[#444658] font-[500] border-b">
                    Department
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 text-[#444658] font-[300]">
                    {item.id}
                  </td>
                  <td className="px-2 sm:px-4 py-2 text-[#444658] font-[300]">
                    {item.iqama}
                  </td>
                  <td className="px-2 sm:px-4 py-2 flex items-center space-x-3 text-[#444658] font-[300]">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                    />
                    <span className="text-sm sm:text-base">{item.name}</span>
                  </td>
                  <td className="px-2 sm:px-4 py-2 text-sm sm:text-base text-[#444658] font-[300]">
                    {item.position}
                  </td>
                  <td className="px-2 sm:px-4 py-2 text-sm sm:text-base text-[#444658] font-[300]">
                    {item.location}
                  </td>
                  {view === "Employee" && (
                    <td className="px-2 sm:px-4 py-2 text-sm sm:text-base text-[#444658] font-[300]">
                      {item.department}
                    </td>
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
