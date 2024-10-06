import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://fooddelivery:1478963@cluster0.qwivg.mongodb.net/fooddel"
    )
    .then(() => console.log("DB connected"));
};
