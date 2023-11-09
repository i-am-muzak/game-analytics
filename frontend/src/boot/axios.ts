import { boot } from "quasar/wrappers";
import axios, { AxiosError, AxiosInstance, CreateAxiosDefaults } from "axios";
import { Cookies, Notify } from "quasar";
import { useRouter } from "vue-router";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const config: CreateAxiosDefaults = { baseURL: process.env.API_BASE_URL };

const api = axios.create(config);

export default boot(async ({ app, router }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  api.interceptors.response.use(
    (response) => response,
    (error: Error | AxiosError) => {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        if (status) {
          switch (status) {
            // Unprocessable Entity error
            case 400:
            case 404:
              Notify.create({
                message:
                  error.response?.data?.error ||
                  error.message ||
                  "An unknown error occured.",
                type: "negative",
              });
              break;

            case 401:
              Cookies.remove("session");

              Notify.create({
                message:
                  "Your session has been expired. Please sign in again...",
                type: "negative",
              });

              router.push({ name: "login-page" });
              break;

            // Unprocessable Entity error
            case 422:
              Notify.create({
                message:
                  "Please fill out all fields. If you filled out all fields, the error is related to server.",
                type: "negative",
              });
              break;

            case 500:
              Notify.create({
                message:
                  "An internal error occured. This error is related to server, please try again later.",
                type: "negative",
              });
              break;

            default:
              break;
          }
        }
      }

      throw error;
    }
  );

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API

  if (Cookies.has("session")) {
    const headers = {
      Authorization: `Bearer ${Cookies.get("session")}`,
    };

    api.defaults.headers.common = headers;
  }
});

export { api };
