import mongoose from "mongoose";

export async function connect() {
  await mongoose.connect("mongodb://localhost/tasker", { useNewUrlParser: true });

  console.log("DB Connected");
}
