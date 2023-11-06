import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

// Validators
import RegisterValidator from "App/Validators/auth/RegisterValidator";
import LoginValidator from "App/Validators/auth/LoginValidator";

// Models
import User, { Groups } from "App/Models/User";

import { ResponseManager } from "App/lib/Response";
import Hash from "@ioc:Adonis/Core/Hash";
import ApiToken from "App/Models/ApiToken";
import Logger from "@ioc:Adonis/Core/Logger";

export enum AuthControllers {
  REGISTER = "AuthController.register",
  LOGIN = "AuthController.login",
  LOGOUT = "AuthController.logout",
}

export default class AuthController {
  public async register(ctx: HttpContextContract) {
    const payload = await ctx.request.validate(RegisterValidator);
    var user = await User.query().where("email", "=", payload.email).first();
    const responseManager = new ResponseManager(ctx);

    if (user) {
      return responseManager.badRequest("Email address in use.");
    }

    user = await new User()
      .fill({
        email: payload.email,
        password: payload.password,
        group: Groups.Viewer.toString(),
        organization_id: null,
      })
      .save();

    const token = await ctx.auth.use("api").generate(user, {
      expiresIn: "14 days",
      name: "access-token",
    });

    return token;
  }

  public async login(ctx: HttpContextContract) {
    const payload = await ctx.request.validate(LoginValidator);
    var user = await User.query().where("email", "=", payload.email).first();
    const responseManager = new ResponseManager(ctx);

    if (!user) {
      return responseManager.badRequest("Wrong email or password.");
    }

    if (!(await Hash.verify(user.password, payload.password))) {
      return responseManager.badRequest("Wrong email or password.");
    }

    try {
      const isTokenExist = await ApiToken.query()
        .where("user_id", "=", user.id)
        .first();
      if (isTokenExist) {
        Logger.info("Deleting the existing token...");
        await isTokenExist.delete();
      }

      const token = await ctx.auth.use("api").generate(user, {
        expiresIn: "14 days",
        name: "access-token",
      });
      return token;
    } catch (err) {
      return responseManager.badRequest(err);
    }
  }

  public async logout(ctx: HttpContextContract) {
    await ctx.auth.use('api').revoke()

    if (ctx.auth.use("api").isLoggedOut) {
      return {
        detail: "You are successfully logged out!",
      };
    }
  }
}
