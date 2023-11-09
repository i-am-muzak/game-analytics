import { route } from "quasar/wrappers";
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
  useRouter,
} from "vue-router";

import routes from "./routes";
import { Cookies } from "quasar";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === "history"
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  Router.beforeEach((to, from, next) => {
    const hasSessionCookie = Cookies.has("session");

    if (hasSessionCookie) {
      if (to.path === "/login") {
        next({ name: "index-page" });
      } else {
        next();
      }
    } else {
      if (to.path !== "/login") {
        next({ name: "login-page" });
      } else {
        next();
      }
    }
  });

  return Router;
});
