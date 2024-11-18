// types/FormTypes.ts
export interface CompanyInfoData {
    companyName: string;
    companyOwnerName: string;
    comericalRegisterationNumer: string;
    email: string;
    country: string;
    companyAddress: string;
    phoneNumber: string;
    companylogo: string;
}

export interface CompanyAttachmentsData {
    name: string;
    type: string;
    expiry: string;
    attachmentUrl: string;
    reminderName: string;
    remnderdate: string;
}

export interface CompanyOwnershipData {
    ownerName: string;
    ownerPercentage: number;
}

export interface FormData {
    companyInfo: CompanyInfoData;
    documents: CompanyAttachmentsData[];
    ownership: CompanyOwnershipData;
}

export interface FormContextType {
    formData: FormData;
    updateFormData: (step: keyof FormData, data: Partial<FormData[keyof FormData]>) => void;
    submitForm: () => Promise<void>;
}
