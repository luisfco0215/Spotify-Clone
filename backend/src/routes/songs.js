import { Router } from "express";
import { getAllSongs, getFeaturedSongs, getMadeForYouSongs, getTrendingSongs } from "../controller/song.controller.js";
import protectedRoute, { requireAdmin } from "../middleware/auth.middleware.js";

const routes = Router();

routes.get("/", protectedRoute, requireAdmin, getAllSongs);
routes.get("/feature", getFeaturedSongs);
routes.get("/made-for-you", getMadeForYouSongs);
routes.get("/trending", getTrendingSongs);

export default routes;