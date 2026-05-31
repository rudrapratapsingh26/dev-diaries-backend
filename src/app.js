import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import postRouter from "./routes/post.routes.js";
import uploadRouter from "./routes/upload.routes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://your-vercel-url.vercel.app",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/upload", uploadRouter);

export default app;
