import React, { useState } from 'react';

interface PersonalInfo {
  nationality?: string;
  address?: string;
  religion?: string;
  maritalStatus?: string;
  birthDate?: string;
  startOfContract?: string;
  endOfContract?: string;
  gender?: string;
  contractType?: string;
}

const PersonalInfoComponent = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({});
  const [gender, setGender] = useState<string>('');
  const [contractType, setContract] = useState<string>('');
  const [formErrors, setFormErrors] = useState<Partial<PersonalInfo>>({});

  const handleInputChange = (fieldName: keyof PersonalInfo, value: string | number) => {
    setPersonalInfo((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const validateField = (field: keyof PersonalInfo, value: string | number) => {
    if (!value) {
      setFormErrors((prev) => ({
        ...prev,
        [field]: `${capitalizeFirstLetter(field)} is required.`,
      }));
    } else {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const capitalizeFirstLetter = (field: keyof PersonalInfo) => {
    return field.charAt(0).toUpperCase() + field.slice(1);
  };

  return (
    <div className="flex flex-col ml-[10px]">
      {/* Nationality and Address */}
      <div className="flex flex-row">
      <div className="flex flex-col ml-[-400px]">
          <div className="text-[#444658] size-[16px]">Nationality*</div>
          <div className="flex mt-[14px] ml-[-6px] relative">
            <input
              type="text"
              placeholder="Nationality"
              className={`w-[290px] px-4 py-2 border rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                formErrors.nationality ? 'border-red-500' : ''
              }`}
              onBlur={(e) => validateField('nationality', e.target.value)}
              onChange={(e) => handleInputChange('nationality', e.target.value)}
            />
            {formErrors.nationality && (
              <span className="absolute text-red-500 text-sm ml-2 bottom-[-20px]">
                {formErrors.nationality}
              </span>
            )}
          </div>
        </div>



        <div className="flex flex-col ml-[290px]">
  <div className="text-[#444658] size-[16px]">Address*</div>
  <div className="flex mt-[14px] relative">
    <input
      type="text"
      placeholder="Enter Address"
      value={personalInfo.address}
      className={ `w-[290px] px-4 py-2 border rounded-full ${
        formErrors.address ? 'border-red-500' : ''
      }`}
      onBlur={(e) => validateField('address', e.target.value)}
      onChange={(e) => handleInputChange('address', e.target.value)}
    />
    {formErrors.address && (
      <span className="absolute text-red-500 text-sm ml-2 bottom-[-20px]">{formErrors.address}</span>
    )}
  </div>
</div>

      </div>

   {/* Religion and Marital Status */}
<div className="flex flex-row mt-6">
  {/* Religion Field */}
  <div className="flex flex-col ml-[-400px]">
    <div className="text-[#444658] size-[16px]">Religion*</div>
    <div className="flex mt-[14px] relative gap-5">
      <input
        type="text"
        placeholder="Religion"
        value={personalInfo.religion}
        className={`w-[290px] px-4 py-2 border rounded-full ${
          formErrors.religion ? 'border-red-500' : ''
        }`}
        onBlur={(e) => validateField('religion', e.target.value)}
        onChange={(e) => handleInputChange('religion', e.target.value)}
      />
      {formErrors.religion && (
        <span className="absolute text-red-500 text-sm ml-2 bottom-[-20px]">{formErrors.religion}</span>
      )}
    </div>
  </div>

  {/* Marital Status Field */}
  <div className="flex flex-col ml-[285px]">
    <div className="text-[#444658] size-[16px] w-[120px]">Marital Status *</div>
    <div className="flex mt-[14px] relative gap-5">
      <input
        type="text"
        placeholder="Enter Marital Status"
        value={personalInfo.maritalStatus}
        className={`w-[290px] px-4 py-2 border rounded-full ${
          formErrors.maritalStatus ? 'border-red-500' : ''
        }`}
        onBlur={(e) => validateField('maritalStatus', e.target.value)}
        onChange={(e) => handleInputChange('maritalStatus', e.target.value)}
      />
      {formErrors.maritalStatus && (
        <span className="absolute text-red-500 text-sm ml-2 bottom-[-20px]">{formErrors.maritalStatus}</span>
      )}
    </div>
  </div>
</div>


     {/* Birth Date, Start of Contract, End of Contract */}
<div className="flex flex-row mt-6">
  {/* Birth Date Field */}
  <div className="flex flex-col ml-[-400px]">
    <div className="text-[#444658] size-[16px] w-[120px]">Birth Date*</div>
    <div className="flex mt-[14px] relative gap-5">
      <input
        type="date"
        value={personalInfo.birthDate}
        className={`w-[290px] px-4 py-2 border rounded-full ${
          formErrors.birthDate ? 'border-red-500' : ''
        }`}
        onBlur={(e) => validateField('birthDate', e.target.value)}
        onChange={(e) => handleInputChange('birthDate', e.target.value)}
      />
      {formErrors.birthDate && (
        <span className="absolute text-red-500 text-sm ml-2 bottom-[-20px]">{formErrors.birthDate}</span>
      )}
    </div>
  </div>

  {/* Start of Contract Field */}
  <div className="flex flex-col ml-[285px]">
    <div className="text-[#444658] size-[16px] w-[150px]">Start Of Contract *</div>
    <div className="flex mt-[14px] relative gap-5">
      <input
        type="date"
        value={personalInfo.startOfContract}
        className={`w-[207px] px-4 py-2 border rounded-full ${
          formErrors.startOfContract ? 'border-red-500' : ''
        }`}
        onBlur={(e) => validateField('startOfContract', e.target.value)}
        onChange={(e) => handleInputChange('startOfContract', e.target.value)}
      />
      {formErrors.startOfContract && (
        <span className="absolute text-red-500 text-sm ml-2 bottom-[-20px]">{formErrors.startOfContract}</span>
      )}
    </div>
  </div>

  {/* End of Contract Field */}
  <div className="flex flex-col ml-3">
    <div className="text-[#444658] size-[16px] w-[150px]">End Of Contract *</div>
    <div className="flex mt-[14px] relative gap-5">
      <input
        type="date"
        value={personalInfo.endOfContract}
        className={`w-[207px] px-4 py-2 border rounded-full ${
          formErrors.endOfContract ? 'border-red-500' : ''
        }`}
        onBlur={(e) => validateField('endOfContract', e.target.value)}
        onChange={(e) => handleInputChange('endOfContract', e.target.value)}
      />
      {formErrors.endOfContract && (
        <span className="absolute text-red-500 text-sm ml-2 bottom-[-20px]">{formErrors.endOfContract}</span>
      )}
    </div>
  </div>
</div>


     {/* Gender */}
<div className="flex flex-row mt-6">
  <div className="flex flex-col ml-[-400px]">
    <label className="text-sm font-semibold text-gray-700">
      Gender <span className="text-[#444658]">*</span>
    </label>
    <div className="flex items-center space-x-4 mt-2">
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={(e) => {
            setGender(e.target.value);
            validateField('gender', e.target.value);
          }}
          className={`w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500 ${
            formErrors.gender ? 'border-red-500' : ''
          }`}
        />
        <span className="text-gray-800">Male</span>
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={(e) => {
            setGender(e.target.value);
            validateField('gender', e.target.value);
          }}
          className={`w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500 ${
            formErrors.gender ? 'border-red-500' : ''
          }`}
        />
        <span className="text-gray-800">Female</span>
      </label>
    </div>
    {formErrors.gender && (
      <span className="text-red-500 text-sm ml-2">{formErrors.gender}</span>
    )}
  </div>

  {/* Contract Type */}
  <div className="flex flex-col ml-[425px]">
    <label className="text-sm font-semibold text-gray-700">
      Contract Type <span className="text-red-500">*</span>
    </label>
    <div className="flex items-center space-x-4 mt-2">
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="contractType"
          value="limited"
          checked={contractType === 'limited'}
          onChange={(e) => {
            setContract(e.target.value);
            validateField('contractType', e.target.value);
          }}
          className={`w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500 ${
            formErrors.contractType ? 'border-red-500' : ''
          }`}
        />
        <span className="text-gray-800">Limited</span>
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="radio"
          name="contractType"
          value="unlimited"
          checked={contractType === 'unlimited'}
          onChange={(e) => {
            setContract(e.target.value);
            validateField('contractType', e.target.value);
          }}
          className={`w-5 h-5 text-blue-500 border-gray-300 focus:ring-blue-500 ${
            formErrors.contractType ? 'border-red-500' : ''
          }`}
        />
        <span className="text-gray-800">Unlimited</span>
      </label>
    </div>
    {formErrors.contractType && (
      <span className="text-red-500 text-sm ml-2">{formErrors.contractType}</span>
    )}
  </div>
</div>

    </div>
  );
};

export default PersonalInfoComponent;
