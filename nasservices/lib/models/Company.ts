import mongoose, { Schema, model, Document } from 'mongoose';

interface DocumentSchema {
  name: string;
  type: string;
  documentURL: string;
  documentNumber: string;
  expiryDate: Date;
  expiryReminder: string;
  ReminderDate: Date;
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

interface EmployeeSchema {
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

interface OwnersSchema {
  userType: string;
  userID: string;
  userName: string;
}

interface CompanyInfoSchema {
  name: string;
  address: string;
  city: string;
  country: string;
  commercialLicenseNumber: string;
  licenseExpiryDate: Date;
  companyLogo: string;
  phoneNumber: string;
}

interface CompanySchema extends Document {
  companyInfo: CompanyInfoSchema;
  ownership: OwnersSchema[];
  documents: DocumentSchema[];
  employees: EmployeeSchema[];
  assets: AssetSchema[];
  createdAt: Date;
  updatedAt: Date;
}

// Sub-Schemas
const DocumentSchema = new Schema<DocumentSchema>({
  name: { type: String, required: false },
  type: { type: String, required: false },
  documentURL: { type: String, required: false },
  documentNumber: { type: String, required: false },
  expiryDate: { type: Date, required: false },
  expiryReminder: { type: String, required: false },
  ReminderDate: { type: Date, required: false },
});

const AssetSchema = new Schema<AssetSchema>({
  name: { type: String, required: false },
  type: { type: String, required: false },
  description: { type: String, required: false },
  assetInfo: { type: String, required: false },
  documents: [DocumentSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const EmployeeSchema = new Schema<EmployeeSchema>({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  fatherName: { type: String, required: false },
  email: { type: String, required: false },
  password: { type: String, required: false },
  nationality: { type: String, required: false },
  dob: { type: String, required: false },
  gender: { type: String, required: false },
  contractType: { type: String, required: false },
  contractLimit: { type: String, required: false },
  role: { type: String, required: false },
  occupationIqama: { type: String, required: false },
  workBackground: [DocumentSchema],
  attachment: [DocumentSchema],
  iqamaNumber: { type: String, required: false },
  idNumber: { type: String, required: false },
  profession: { type: String, required: false },
  educationInfo: { type: String, required: false },
  salary: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const OwnersSchema = new Schema<OwnersSchema>({
  userType: { type: String, required: false },
  userID: { type: String, required: false },
  userName: { type: String, required: false },
});

const CompanyInfoSchema = new Schema<CompanyInfoSchema>({
  name: { type: String, required: false },
  address: { type: String, required: false },
  city: { type: String, required: false },
  country: { type: String, required: false },
  commercialLicenseNumber: { type: String, required: false },
  licenseExpiryDate: { type: Date, required: false },
  companyLogo: { type: String, required: false },
  phoneNumber: { type: String, required: false },
});

// Main `Company` Schema
const CompanySchema = new Schema<CompanySchema>({
  companyInfo: { type: CompanyInfoSchema, required: true },
  ownership: [OwnersSchema],
  documents: [DocumentSchema],
  employees: [EmployeeSchema],
  assets: [AssetSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Company || model<CompanySchema>('Company', CompanySchema);
