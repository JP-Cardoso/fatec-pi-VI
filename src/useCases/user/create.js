import { CreateUserService } from "../../services/user/create-service.js";

export class CreateUserUseCase {

  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  //chamaria a service para validar os dados
  //chamaria o repositorio para salvar o usuário criado

  async execute(params) {
    console.log('Params ->', params);
    const userService = new CreateUserService();
    const user = await userService.execute(params);
    this.userRepository.save(user);
  }
}