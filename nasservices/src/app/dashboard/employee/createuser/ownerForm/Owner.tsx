"use client"
import { useState } from "react";

export default function owner()
{
    const [formData, setFormData] = useState({
        companyName: "",
        userName: "",
        email: "",
        address: "",
        phoneNumber: "",
        userPhoto: null as File | null, 
      });
    
      const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] || null; 
        setFormData((prev) => ({
          ...prev,
          userPhoto: file, 
        }));
        if (file) {
          console.log(file.name); 
        }
      };
    
      const handleSubmit = async () => {
        
        const payload = {
          companyName: formData.companyName,
          userName: formData.userName,
          email: formData.email,
          address: formData.address,
          phoneNumber: formData.phoneNumber,
          userPhoto: formData.userPhoto ? await fileToBase64(formData.userPhoto) : null, 
        };
      
        console.log("Payload before sending to server:", payload);
      
        try {
          const response = await fetch("/company/newOwner", {
            method: "POST",
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify(payload), 
          });
      
          if (!response.ok) {
            throw new Error("Failed to create a new owner.");
          }
          console.log("Owner created successfully!");
        } catch (error) {
          console.error(error);
        }
      };
      
      
      const fileToBase64 = (file: File): Promise<string> =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = (error) => reject(error);
        });
      
    return(
        <div className=" ml-[20px] w-[98%] mb-[40px] mt-4">
            New Owner
            <div className="border-b mt-2"></div>
            <div className="flex flex-col mt-8 ml-4">
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <div className="text-[#444658]">
                            Company Name <span className="text-red-500">*</span>
                        </div>
                        <div className="flex mt-[14px] ml-[-6px] ">
                    <input
                     type="text"
                     value={formData.companyName}
                     onChange={(e) =>
                       setFormData((prev) => ({ ...prev, companyName: e.target.value }))
                     }
                     placeholder="Full Name"
                      className="w-[174px] px-4 py-2 border rounded-full  placeholder-gray-400 focus:[#444658]"
                      ></input>
                </div>
                    </div>
                    <div className="flex flex-col ml-8 ">
                        <div className="text-[#444658]">
                            User Name<span className="text-red-500">*</span>
                        </div>
                        <div className="flex mt-[14px] ml-[-6px] ">
                    <input
                     type="text"
                     value={formData.userName}
                     onChange={(e) =>
                       setFormData((prev) => ({ ...prev, userName: e.target.value }))
                     }
                     placeholder="Nassar Ibn Ibrahim"
                      className="w-[246px] px-4 py-2 border rounded-full  placeholder-gray-400 focus:[#444658]"
                      ></input>
                </div>
                    </div>
                    <div className="flex flex-col ml-8">
                        <div className="text-[#444658]">
                            Email<span className="text-red-500">*</span>
                        </div>
                        <div className="flex mt-[14px] ml-[-6px] ">
                    <input
                     type="text"
                     value={formData.email}
                     onChange={(e) =>
                       setFormData((prev) => ({ ...prev, email: e.target.value }))
                     }
                     placeholder="Employee@nastecsol.com"
                      className="w-[266px] px-4 py-2 border rounded-full  placeholder-gray-400 focus:[#444658]"
                      ></input>
                </div>
                    </div>
                </div>

                <div className="flex flex-row mt-6">
                    <div className="flex flex-col">
                        <div className="text-[#444658]">
                           Add Complete Address <span className="text-red-500">*</span>
                        </div>
                        <div className="flex mt-[14px] ml-[-6px] ">
                    <input
                     type="text"
                     value={formData.address}
                     onChange={(e) =>
                       setFormData((prev) => ({ ...prev, address: e.target.value }))
                     }
                     placeholder="Full address"
                      className="w-[264px] px-4 py-2 border rounded-full placeholder-gray-400 focus:[#444658]"
                      ></input>
                </div>
                    </div>
                    <div className="flex flex-col ml-8">
                        <div className="text-[#444658]">
                            Phone Number <span className="text-red-500">*</span>
                        </div>
                        <div className="flex mt-[14px] ml-[-6px] ">
                    <input
                     type="number"
                     value={formData.phoneNumber}
                     onChange={(e) =>
                       setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))
                     }
                     placeholder="+92-320932983"
                      className="w-[264px] px-4 py-2 border rounded-full placeholder-gray-400 focus:[#444658]"
                      ></input>
                </div>
                    </div>
                 
                </div>
                <div className="flex flex-col space-y-2 mt-2 ">
                   <label htmlFor="file-upload" className="text-[#444658] w-32 size-[16px] mt-[18px] mb-[8px]">
                       Add User Photo<span className="text-red-500">*</span>
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
                       
              </div>
          </div>
            </div>
            <div className="mt-[120px] ml-[560px]">
            <button
          className="border rounded-2xl bg-[#ffffff] text-[#444658] w-[80px] h-[40px]"
          onClick={() =>
            setFormData({
              companyName: "",
              userName: "",
              email: "",
              address: "",
              phoneNumber: "",
              userPhoto: null,
            })
          }
        >
          Cancel
        </button>
                <button className="border rounded-2xl bg-[#444658] text-white w-[100px] h-[40px] ml-3"  onClick={handleSubmit} > Create User</button>
            </div>
        </div>
        
        
    )
}