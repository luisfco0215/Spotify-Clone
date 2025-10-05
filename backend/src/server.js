import express from "express";
import dotenv from "dotenv";
import connectDB from "./lib/db.js";

//Routes
import user from "./routes/user.js";
import auth from "./routes/auth.js";
import admin from "./routes/admin.js";
import songs from "./routes/songs.js";
import albums from "./routes/albums.js";
import stats from "./routes/stats.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

//Routes    
app.use("/api/user", user);
app.use("/api/auth", auth);
app.use("/api/admin", admin);
app.use("/api/songs", songs);
app.use("/api/albums", albums);
app.use("/api/stats", stats);

app.use('/', user);


app.listen(PORT, () => {
    console.log("App listening on port: " + PORT);
    connectDB();
});