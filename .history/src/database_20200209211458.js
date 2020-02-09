import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/tasker", {
      useNewUrlParser: true
    });

    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
}
