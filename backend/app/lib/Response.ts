import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Logger from "@ioc:Adonis/Core/Logger";

export class ResponseManager {
  ctx: HttpContextContract | null;

  constructor(ctx: HttpContextContract) {
    this.ctx = ctx;
  }

  badRequest(message: string) {
    if (this.ctx) {
      Logger.info(
        `${this.ctx.request.ip()} - ${this.ctx.request.method()} - Error: ${message}`
      );
      this.ctx.response.badRequest({ error: message });
    }
  }
}
