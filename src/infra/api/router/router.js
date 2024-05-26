import { Router } from "express";
import { UserController } from "../controller/user/user-controller.js";
import { AuthenticateController } from "../controller/auth/Authenticate.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

const userController = new UserController();
const authController = new AuthenticateController();

router.post("/user", userController.handle);
router.get("/users", authMiddleware, userController.getAll);

router.post("/auth", authController.authenticate);

export default router;