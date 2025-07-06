import { createEffect } from "effector";
import { registerAPI, loginAPI, loginGoogleAPI } from "./api";

import {
  RegisterFXParam,
  LoginFXParam,
  BaseResponse,
  loginFxResponse,
} from "../types";
import { ResponseError } from "@/shared/types";

export const loginFx = createEffect<
  LoginFXParam,
  loginFxResponse,
  ResponseError
>();
loginFx.use(loginAPI);

export const registerFx = createEffect<
  RegisterFXParam,
  BaseResponse,
  ResponseError
>();
registerFx.use(registerAPI);

export const loginGoogleFx = createEffect<
  void,
  BaseResponse,
  ResponseError
>();
loginGoogleFx.use(loginGoogleAPI);
