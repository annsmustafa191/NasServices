// types/FormTypes.ts
export interface CompanyInfoData {
    companyName: string;
    companyAddress: string;
}

export interface CompanyAttachmentsData {
    attachmentUrl: string;
}

export interface CompanyOwnershipData {
    ownerName: string;
    ownerPercentage: number;
}

export interface FormData {
    companyInfo: CompanyInfoData;
    attachments: CompanyAttachmentsData;
    ownership: CompanyOwnershipData;
}

export interface FormContextType {
    formData: FormData;
    updateFormData: (step: keyof FormData, data: Partial<FormData[keyof FormData]>) => void;
    submitForm: () => Promise<void>;
}
