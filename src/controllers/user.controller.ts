import { Request, Response } from "express";
import { handleCreateUserLogic } from "../services/user.service";


const getHomePage = (req: Request, res: Response) => {
    return res.render("home.ejs");
}

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create-user.ejs");
}
const handleCreateUser = (req: Request, res: Response) => {
    // Xử lý info user
    const { fullName, email, address } = req.body;
    handleCreateUserLogic(fullName, email, address);

    return res.redirect("/");
}


export { getHomePage, getCreateUserPage, handleCreateUser };