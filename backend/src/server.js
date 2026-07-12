import express from "express";
import dotenv from "dotenv";
import path from "path";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();

const app = express();

const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);


if(process.env.NODE_ENV === "production") {
  // 1. Changed "../" to "../../" so it hops out of both 'src' and 'backend' folders
  app.use(express.static(path.join(__dirname, "../../frontend/dist")))

  app.get("*",(_,res) => {
    // 2. Fixed the typo from "indexed.html" to "index.html"
    res.sendFile(path.join(__dirname,"../../frontend", "dist", "index.html"))
  });
}

app.listen(PORT, () => console.log("Server running on port: " + PORT));