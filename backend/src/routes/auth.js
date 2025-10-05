import { Router } from "express";
import authCallback from "../controller/auth.controller.js";

const routes = Router();

routes.post("/callback", authCallback);

export default routes;