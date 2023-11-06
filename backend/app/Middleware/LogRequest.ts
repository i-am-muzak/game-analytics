import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Logger from "@ioc:Adonis/Core/Logger";

export default class LogRequest {
  public async handle(
    { request }: HttpContextContract,
    next: () => Promise<void>
  ) {
    Logger.info(
      `Request from ${request.ip()} - Method: ${request.method()} - Endpoint: ${request.url()} - Params: ${JSON.stringify(
        request.params()
      )} - Data: ${JSON.stringify(request.body())}`
    );
    await next();
  }
}
