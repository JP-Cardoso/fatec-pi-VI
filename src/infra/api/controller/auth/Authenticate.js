import { UserRepository } from "../../../../domain/repository/user/user-repository.js";
import { AuthenticateUseCase } from "../../../../domain/useCases/authenticate/Auth.js";

export class AuthenticateController {
  constructor() { }

  async authenticate(req, res) {
    const { email, password } = req.body;
    const repository = new UserRepository();
    const authUseCase = new AuthenticateUseCase(repository);
    const token = await authUseCase.execute(email, password)
    console.log(token);
  }
} 
