export class UpdateUserUseCase {

  constructor(repository) {
    this.repository = repository;
  }

  async execute(userItem) {
    const { id, nome, email, password } = userItem;
    const user = await this.repository.findOneByPk();

    if (!user) {
      throw new Error({ error: "User not found" });
    }

    const newUser = {
      nome, email
    }

    const reult = await this.repository.update(newUser, id);

    return reult;
  }
}