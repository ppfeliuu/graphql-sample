import mongoose from "mongoose";

export function connect() {
  mongoose.connect("mongodb://localhost/tasker", { useNewUrlParser: true });

  console.log("DB Connected");
}
