import { Router } from "express";
import protectedRoute from "../middleware/auth.middleware.js";
import getAllUsers from "../controller/user.controller.js";

const routes = Router();

routes.get("/", protectedRoute, getAllUsers);

export default routes;