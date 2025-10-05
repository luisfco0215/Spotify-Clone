import { Router } from "express";

const routes = Router();

routes.get("/", async (req, res) => {
    res.json("Almbums route");
});

export default routes;