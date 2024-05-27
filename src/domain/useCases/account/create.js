export class CreateAccountUseCase {

  #repository;

  constructor(repository) {
    this.repository = repository;
  }

  async execute(data) {
    const result = await this.repository.save(data);
    return result;
  }
}