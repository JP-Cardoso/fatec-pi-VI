import { AccountModel } from "../../../infra/config/account/Account-Model.js";

export class AccountRepository {

  async save(data) {
    await AccountModel.create(data);
  }
}