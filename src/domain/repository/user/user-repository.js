import { UserModel } from "../../../infra/config/user/user-model.js";

export class UserRepository {

  async save(params) {
    const user = await UserModel.create(params);
  }

}