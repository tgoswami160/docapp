import mongoose from "mongoose";

const connectDb = async () => {

  try {

    await mongoose.connect(`${process.env.MONGODB_URL}/doctorAppointmentWeb`);
    console.log("Database connected!!");

  } catch (error) {
    console.log("Database connection failed!!");
    console.error(error);
    process.exit(1)
  }
};

export default connectDb;
