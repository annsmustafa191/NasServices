// models/Company.js

import mongoose from 'mongoose';

const CompanySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  commercialLicenseNumber: { type: String, required: true },
  licenseExpiryDate: { type: Date, required: true },
  documents: [
    {
      type: String,
      documentNumber: String,
      expiryDate: Date
    }
  ],
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  agentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
  assets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asset' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Company = mongoose.models.Company || mongoose.model('Company', CompanySchema);
export default Company;