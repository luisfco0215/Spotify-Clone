import { Router } from "express";

const routes = Router();

routes.get("/", async (req, res) => {
    res.json("Admin route");
});

export default routes;