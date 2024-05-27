import { AccountModel } from "../../../infra/config/mysql/account/Account-Model.js";

export class AccountRepository {

  async save(data) {
    await AccountModel.create(data);
  }
}