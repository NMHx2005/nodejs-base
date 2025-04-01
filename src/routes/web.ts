import express from "express";
import { getCreateUserPage, getHomePage, handleCreateUser } from "../controllers/user.controller";

const router = express.Router();


const webRoutes = (app: any) => {

    router.get("/", getHomePage);

    router.get("/create-user", getCreateUserPage);

    router.post("/create-user-handle", handleCreateUser);

    app.use("", router);
}


export default webRoutes;