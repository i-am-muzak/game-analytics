import Route from "@ioc:Adonis/Core/Route";
import { AuthControllers } from "App/Controllers/Http/AuthController";

export const AuthRoutes = Route.group(() => {
  Route.post("/register", AuthControllers.REGISTER);
  Route.post("/login", AuthControllers.LOGIN);
  Route.post("/logout", AuthControllers.LOGOUT);
}).prefix("auth");
