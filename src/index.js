import "dotenv/config";
import app from "./app.js";
import connectDB from "./database/database.js";

const startServer = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Server failed to start", error);
  }
};

startServer();
