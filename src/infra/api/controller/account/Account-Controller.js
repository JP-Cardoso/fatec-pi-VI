import { CreateAccountUseCase } from "../../../../domain/useCases/account/create.js";

export class AccountController {

  async create(req, res) {
    try {
      const data = req.body;
      const createAccountRepository = new AccountRepository();
      const createAccountUseCase = new CreateAccountUseCase(createAccountRepository);
    } catch (error) {
      res.status(500).send({msg: "erro interno"})
    }
  }
}