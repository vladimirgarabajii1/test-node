import userRoute from "./user";
import express from "express";

const route = express();

route.use('/user', userRoute);

export default route
