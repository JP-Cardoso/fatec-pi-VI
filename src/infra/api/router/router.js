import { Router } from "express";
import { UserController } from "../controller/user/user-controller.js";
import { AuthenticateController } from "../controller/auth/Authenticate.js";

const router = Router();

const createUserController = new UserController();
const authController = new AuthenticateController();

router.post("/user", createUserController.handle);
router.post("/auth", authController.authenticate);

export default router;