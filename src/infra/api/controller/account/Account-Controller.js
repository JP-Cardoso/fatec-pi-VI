import { CreateAccountUseCase } from "../../../../domain/useCases/account/create.js";

export class AccountController {

  async create(req, res) {
    try {
      const data = req.body;
      const createAccountRepository = new AccountRepository();
      const createAccountUseCase = new CreateAccountUseCase(createAccountRepository);
      const result = createAccountUseCase.execute(data);
      res.status(201).send({ msg: "Conta criada com sucesso!" });
    } catch (error) {
      res.status(500).send({ msg: "erro interno" });
    }
  }
}