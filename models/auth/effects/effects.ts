import { createEffect } from "effector";
import { registerAPI, loginAPI } from "./api";

import { RegisterFXParam, LoginFXParam, BaseResponse } from "../types";

export type BackendErrorResponse = {
  message?: string;
  messages?: string[];
  status: string;
};

export type ResponseErrorDescription = {
  location?: (string | number)[];
  message?: string;
  type?: string;
  code?: number;
  point?: string;
  initialResponse?: BackendErrorResponse;
};

export class ResponseError {
  #description: ResponseErrorDescription[];

  get description() {
    return this.#description;
  }

  constructor(description: ResponseErrorDescription[]) {
    this.#description = description;
  }
}

export const loginFx = createEffect<
  LoginFXParam,
  BaseResponse,
  ResponseError
>();
loginFx.use(loginAPI);

export const registerFx = createEffect<
  RegisterFXParam,
  BaseResponse,
  ResponseError
>();
registerFx.use(registerAPI);
