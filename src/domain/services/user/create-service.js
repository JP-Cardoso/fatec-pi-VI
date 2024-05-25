import { hash } from "bcrypt";

export class CreateUserService {

  async execute(params) {

    const { name, email, password } = params

    if (!email) {
      throw new Error("Email incorrect");
    }
    if (!name) {
      throw new Error("Name incorrect");
    }
    if (!password) {
      throw new Error("Password incorrect");
    }

    const newPassword = await this.hashPassword(password);
    const user = {
      name,
      email,
      password: newPassword
    }

    return user;
  }

  async hashPassword(password) {
    return await hash(password, 8);
  }

}