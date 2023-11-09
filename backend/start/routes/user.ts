import Route from "@ioc:Adonis/Core/Route";
import { UserControllers } from "App/Controllers/Http/UsersController";

export const UserRoutes = Route.group(() => {
  Route.get("/profile", UserControllers.PROFILE);
}).prefix("user").middleware("auth");
