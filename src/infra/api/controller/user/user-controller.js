import { UserRepository } from "../../../../domain/repository/user/user-repository.js";
import { CreateUserUseCase } from "../../../../domain/useCases/user/create.js";

export class UserController {

  async handle(req, res) {
    const { nome, email, password } = req.body;
    const userRepository = new UserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);
    const user = await createUserUseCase.execute({ nome, email, password });
    res.status(201).end();
  }

}