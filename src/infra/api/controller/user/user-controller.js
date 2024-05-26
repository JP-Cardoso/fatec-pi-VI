import { UserRepository } from "../../../../domain/repository/user/user-repository.js";
import { CreateUserUseCase } from "../../../../domain/useCases/user/create.js";
import { GetAllUserUseCase } from "../../../../domain/useCases/user/getAll.js";

export class UserController {

  async handle(req, res) {
    const { nome, email, password } = req.body;
    const userRepository = new UserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);
    const user = await createUserUseCase.execute({ nome, email, password });
    res.status(201).end();
  }

  async getAll(req, res) {
    const userRepository = new UserRepository();
    const getAllUsersUseCase = new GetAllUserUseCase(userRepository);
    const data = await getAllUsersUseCase.execute();
    res.status(200).json(data);
  }

}