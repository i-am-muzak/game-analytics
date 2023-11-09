import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { ResponseManager } from "App/lib/Response";
import Hash from "@ioc:Adonis/Core/Hash";
import Logger from "@ioc:Adonis/Core/Logger";

// Validators
import RegisterValidator from "App/Validators/auth/RegisterValidator";
import LoginValidator from "App/Validators/auth/LoginValidator";

// Models
import User, { Groups } from "App/Models/User";
import ApiToken from "App/Models/ApiToken";

export enum AuthControllers {
  REGISTER = "AuthController.register",
  LOGIN = "AuthController.login",
  LOGOUT = "AuthController.logout",
}

/* 
  IMPORTANT; PLEASE READ.
  THE METHOD I USED FOR AUTHENTICATION IS NOT A PREFERED WAY TO AUTHENTICATE.

  It stores the API token in the database, It'd be quite slow in a real-world production ready app since it validates the token in every single request which requires authorization.

  Instead, I should have been used Redis. However, since I'm going to release this API in Cloud Run or AWS Lambda, it is going to be more affortable. (I try to use Pay-as-you-go systems in general.)
*/
export default class AuthController {
  // Register User
  public async register(ctx: HttpContextContract) {
    // Validate payload.
    const payload = await ctx.request.validate(RegisterValidator);

    // If payload is valid, check if the email in use.
    var user = await User.query().where("email", "=", payload.email).first();
    const responseManager = new ResponseManager(ctx);

    if (user) {
      return responseManager.badRequest("Email address in use.");
    }

    // Create user
    user = await new User()
      .fill({
        email: payload.email,
        password: payload.password,
        group: Groups.Viewer.toString(),
        organization_id: null,
      })
      .save();

    // Generate token by refering the created user.
    const token = await ctx.auth.use("api").generate(user, {
      expiresIn: "14 days",
      name: "access-token",
    });

    return token;
  }

  public async login(ctx: HttpContextContract) {
    // 1- Validate payload
    const payload = await ctx.request.validate(LoginValidator);

    // 2- Check if user already exists
    var user = await User.query().where("email", "=", payload.email).first();
    const responseManager = new ResponseManager(ctx);

    if (!user) {
      return responseManager.badRequest("Wrong email or password.");
    }

    if (!(await Hash.verify(user.password, payload.password))) {
      return responseManager.badRequest("Wrong email or password.");
    }

    try {
      // 3- Check if the user has tokens. If there is a token, delete it and create new one.
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
    // Revoke the token used in the request.
    await ctx.auth.use('api').revoke()

    if (ctx.auth.use("api").isLoggedOut) {
      return {
        detail: "You are successfully logged out!",
      };
    }
  }
}
