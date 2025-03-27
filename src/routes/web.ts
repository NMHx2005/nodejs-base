import express from "express";

const router = express.Router();


const webRoutes = (app: any) => {

    router.get("/", (req, res) => {
        res.render("home.ejs");
    });


    app.use("", router);
}


export default webRoutes;