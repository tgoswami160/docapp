import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  doctorName: {
    type: String,
    required: true,
    trim: true,
  },
  specialization: {
    type: String,
    required: true,
    trim: true,
    enum: ["General Physician","Cardiologist", "Dentist", "Dermatologist", "Orthopedic", "Neurologist"], 
  },
  experience: {
    type: Number,
    required: true,
    min: 0,
    max: 60,
  },
  clinicAddress: {
    type: String,
    required: true,
    trim: true,
  },
  profilePicture: {
    type: String, 
    required: false, 
  },
  licenseId: {
    type: String,
    required: true,
    unique: true,
  },
}, { timestamps: true });

const doctorModel = mongoose.model("Doctor", doctorSchema);

export default doctorModel;
