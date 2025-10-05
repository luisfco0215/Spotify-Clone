import { Router } from "express";

const routes = Router();

routes.get("/", async (req, res) => {
    res.json("Songs route");
});

export default routes;