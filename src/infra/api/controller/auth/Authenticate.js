import { compare } from "bcrypt";
import { UserRepository } from "../../../../domain/repository/user/user-repository.js";
import jwt from "jsonwebtoken";

export class AuthenticateController {
  constructor() { }

  async authenticate(req, res) {
    const repository = new UserRepository();
    const { email, password } = req.body;
    const user = await repository.findOne(email);

    if (!user) {
      throw new Error("User not found");
    }
    console.log(password, user.password);

    const isValidPassword = await compare(password, user.password);
    console.log(isValidPassword);

    if (!isValidPassword) {
      throw new Error("invalid data");
    }

    const token = jwt.sign({ id: user.id }, "68e47484c1554726a9557b76c79ad7d3", { expiresIn: "1d" })

    console.log(token);
  }
} 
