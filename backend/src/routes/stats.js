import { Router } from "express";
import getStats from "../controller/stats.controller.js";

const routes = Router();

routes.get("/", getStats);

export default routes;