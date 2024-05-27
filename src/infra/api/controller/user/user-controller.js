import { UserRepository } from "../../../../domain/repository/user/user-repository.js";
import { CreateUserUseCase } from "../../../../domain/useCases/user/create.js";
import { GetAllUserUseCase } from "../../../../domain/useCases/user/getAll.js";
import { UpdateUserUseCase } from "../../../../domain/useCases/user/update.js";

export class UserController {

  async handle(req, res) {
    try {
      const { nome, email, password } = req.body;
      const userRepository = new UserRepository();
      const createUserUseCase = new CreateUserUseCase(userRepository);
      const user = await createUserUseCase.execute({ nome, email, password });
      res.status(201).send({msg: "usuário cadastrado com sucesso"});
    } catch (error) {
      res.status(500)
    }

  }

  async getAll(req, res) {
    const userRepository = new UserRepository();
    const getAllUsersUseCase = new GetAllUserUseCase(userRepository);
    const data = await getAllUsersUseCase.execute();
    res.status(200).json(data);
  }

  async update(req, res) {
    console.log(req.params);
    return
    const userData = req.body;
    const userRepository = new UserRepository();
    const updateUserUseCase = new UpdateUserUseCase(userRepository);
    const result = await updateUserUseCase.execute(userData);
  }

}