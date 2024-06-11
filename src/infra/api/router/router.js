import { Router } from "express";
import { UserController } from "../controller/user/user-controller.js";
import { AuthenticateController } from "../controller/auth/Authenticate.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

const userController = new UserController();
const authController = new AuthenticateController();

router.post("/user", userController.handle);
router.get("/users", authMiddleware, userController.getAll);
router.put("/user/:id", authMiddleware, userController.update);

router.post("/auth", authController.authenticate);

router.get("/healthcheck", (req, res) => {
  try {
    res.status(200).send({msg: "Tudo ok aqui chefia"});
  } catch (error) {
    res.status(500).send({msg: "Deu erro na aplicação"})
  }
})

export default router;
