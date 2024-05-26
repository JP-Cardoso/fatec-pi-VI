import { UserModel } from "../../../infra/config/user/user-model.js";

export class UserRepository {

  async save(params) {
    const user = await UserModel.create(params);
  }

  async findOne(email) {
    const user = await UserModel.findOne(
      {
        where: {
           email
        }
      }
    );

    return user;
  }

  async getAll() {
    const users = await UserModel.findAll();
    return users;
  }

}