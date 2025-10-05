import { Router } from "express";

const routes = Router();

routes.get("/", async (req, res) => {
    res.json("User");
});

export default routes;