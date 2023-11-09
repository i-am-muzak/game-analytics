import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { ResponseManager } from "App/lib/Response";
import Hash from "@ioc:Adonis/Core/Hash";
import Logger from "@ioc:Adonis/Core/Logger";

// Validators
import RegisterValidator from "App/Validators/auth/RegisterValidator";
import LoginValidator from "App/Validators/auth/LoginValidator";

// Models
import User from "App/Models/User";
import ApiToken from "App/Models/ApiToken";

export enum UserControllers {
  PROFILE = "UsersController.getProfile",
}
export default class UsersController {
  public async getProfile(ctx: HttpContextContract) {
    return ctx.auth.use("api").user?.serialize();
  }
}
