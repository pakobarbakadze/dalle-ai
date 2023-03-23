import mongoose from "mongoose";

const db = async (url) => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url, {
      dbName: "dalle",
    })
    .then(() => console.log("connected to mongoDB"))
    .catch((err) => {
      console.error("failed to connect with mongo");
      console.error(err);
    });
};

export default db;
