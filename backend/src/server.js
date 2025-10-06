import express from "express";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";
import { clerkMiddleware } from "@clerk/express";
import fileupload from "express-fileupload";

//Routes
import user from "./routes/user.js";
import auth from "./routes/auth.js";
import admin from "./routes/admin.js";
import songs from "./routes/songs.js";
import albums from "./routes/albums.js";
import stats from "./routes/stats.js";
import path from "node:path";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(clerkMiddleware());

app.use(fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "tmp"),
    createParentPath: true,
    limits: {
        fileSize: 10 * 1024 * 1024,
    }
}));

//Routes    
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/admin", admin);
app.use("/api/songs", songs);
app.use("/api/albums", albums);
app.use("/api/stats", stats);

app.use((err, req, res, nex) => {
    console.log("Error performing actions", err);

    res.status(500).json({
        message: process.env.NODE_ENV === "production"
            ? "Internal server error"
            : err.message
    })
});


app.listen(PORT, () => {
    console.log("App listening on port: " + PORT);
    connectDB();
});