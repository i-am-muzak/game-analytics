import Route from "@ioc:Adonis/Core/Route";

/* Routes */
import { AuthRoutes } from "./routes/auth";
import { UserRoutes } from "./routes/user";

const api_prefix = "api";

// Imports
AuthRoutes.prefix(api_prefix);
UserRoutes.prefix(api_prefix);
