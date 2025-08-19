import mongoose from "mongoose";    

const doctorAvailabilitySchema=new mongoose.Schema({
    
},{timestamps:true})

const doctorAvailabilityModel=mongoose.model("doctorAvailability",doctorAvailabilitySchema)

export default doctorAvailabilityModel