// src/models/Company.ts

import mongoose, { Schema, model, Document } from 'mongoose';
interface CompanySchema extends Document {
  name: string;
  address: string;
  city: string;
  country: string;
  commercialLicenseNumber: string;
  licenseExpiryDate: Date;
  ownerID: string;
  agentID: string;
  documents: DocumentSchema[];
  employees: EmployeeSchema[];
  assets: AssetSchema[];
  createdAt: Date;
  updatedAt: Date;
}

interface DocumentSchema {
  type: string;
  documentNumber: string;
  expiryDate: Date;
}

interface AssetSchema {
  name: string;
  type: string;
  description: string;
  assetInfo: string;
  documents: DocumentSchema[];
  createdAt: Date;
  updatedAt: Date;
}

interface EmployeeSchema extends Document {
  firstName: string;
  lastName: string;
  fatherName: string;
  email: string;
  password: string;
  nationality: string;
  dob: string;
  gender: string;
  contractType: string;
  contractLimit: string;
  role: string;
  occupationIqama: string;
  workBackground: DocumentSchema[];
  attachment: DocumentSchema[];
  iqamaNumber: string;
  idNumber: string;
  profession: string;
  educationInfo: string;
  salary: string;
  createdAt: Date;
  updatedAt: Date;
}

const DocumentSchema = new Schema<DocumentSchema>({
  type: { type: String, required: true },
  documentNumber: { type: String, required: true },
  expiryDate: { type: Date, required: true },
});

const EmployeeSchema = new Schema<EmployeeSchema>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  fatherName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  nationality: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String, required: true },
  contractType: { type: String, required: true },
  contractLimit: { type: String, required: true },
  role: { type: String, required: true },
  occupationIqama: { type: String, required: true },
  workBackground: [DocumentSchema],
  attachment: [DocumentSchema],
  iqamaNumber: { type: String, required: true },
  idNumber: { type: String, required: true },
  profession: { type: String, required: true },
  educationInfo: { type: String, required: true },
  salary: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const AssetSchema = new Schema<AssetSchema>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: false },
  assetInfo: { type: String, required: true },
  documents: [DocumentSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const CompanySchema = new Schema<CompanySchema>({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  commercialLicenseNumber: { type: String, required: false },
  licenseExpiryDate: { type: Date, required: false },
  ownerID: { type: String, required: true },
  agentID: { type: String, required: true },
  documents: [DocumentSchema],
  employees: [EmployeeSchema],
  assets: [AssetSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Company || model<CompanySchema>('Company', CompanySchema);
// const Company = mongoose.models.Company || mongoose.model('Company', CompanySchema);
// export default Company;