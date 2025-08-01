import { Router } from "express";
import {userControllerV1} from "@controllers/v1/user.controller";

export const userRouter = Router();


userRouter.get("/", userControllerV1.getAllUsers);
userRouter.post('/',userControllerV1.createUser)
userRouter.get("/username", userControllerV1.getByUsername);