// context/FormContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { FormData, FormContextType, CompanyInfoData, CompanyAttachmentsData, CompanyOwnershipData } from '../types/formtypes';

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [formData, setFormData] = useState<FormData>({
        companyInfo: { companyName: '', companyAddress: '' },
        attachments: { attachmentUrl: '' },
        ownership: { ownerName: '', ownerPercentage: 0 }
    });

    const updateFormData = (step: keyof FormData, data: Partial<FormData[keyof FormData]>) => {
        setFormData((prev) => ({
            ...prev,
            [step]: {
                ...prev[step],
                ...data
            }
        }));
    };

    const submitForm = async () => {
        try {
            const response = await fetch('/api/create-company', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            console.log("Form submitted successfully:", result);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData, submitForm }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) throw new Error("useFormContext must be used within a FormProvider");
    return context;
};
