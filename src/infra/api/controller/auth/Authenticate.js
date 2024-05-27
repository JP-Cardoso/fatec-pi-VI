import { UserRepository } from "../../../../domain/repository/user/user-repository.js";
import { AuthenticateUseCase } from "../../../../domain/useCases/authenticate/Auth.js";

export class AuthenticateController {
  constructor() { }

  async authenticate(req, res) {
    try {
      const { email, password } = req.body;
      const repository = new UserRepository();
      const authUseCase = new AuthenticateUseCase(repository);
      const token = await authUseCase.execute(email, password);
      res.status(200).send({ data: token });
    } catch (error) {
      res.status(500);
    }
  }
} 
