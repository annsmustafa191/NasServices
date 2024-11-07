// lib/models/User.ts or lib/models/User.js
import mongoose from 'mongoose';
import Company from '@lib/models/Company';

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  username: String,
  role: String,
  subscriptionId: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  companys: [String], // Array of companies this user (agent) can manage
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;