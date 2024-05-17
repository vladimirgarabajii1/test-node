import express from "express";
import {createUser, getUserList} from "../controllers/user.controller";

const userRoute = express();

userRoute.get('/list/', getUserList)
userRoute.post('/', createUser)

export default userRoute;
