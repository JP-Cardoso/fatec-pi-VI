import { Router } from "express";
import { UserController } from "../../controller/user/user-controller.js";

const router = Router();

const createUserController = new UserController();

router.post("/user", createUserController.handle);

export default router;