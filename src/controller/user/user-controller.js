import { UserRepository } from "../../repository/user/user-repository.js";
import { CreateUserUseCase } from "../../useCases/user/create.js";

export class UserController {

  async handle(req, res) {
    try {
      const { name, email, password } = req.body;
      const userRepository = new UserRepository();
      const createUserUseCase = new CreateUserUseCase(userRepository);
      const user = createUserUseCase.execute({ name, email, password });
    } catch (error) {
      console.error('ERROR -> ', error);
    }
  }

}