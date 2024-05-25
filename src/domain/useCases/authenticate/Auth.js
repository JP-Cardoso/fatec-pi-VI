import { AuthService } from "../../services/auth/Auth-Service.js"

export class AuthenticateUseCase {

  constructor(repository) {
    this.repository = repository
  }

  async execute(email, password) {
    const user = await this.repository.findOne(email);

    if (!user) {
      throw new Error("User not found");
    }

    const authService = new AuthService();

    return await authService.execute(password, user);
  }
}