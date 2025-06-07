import { createEffect } from "effector";
import { registerAPI, loginAPI } from "./api";

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
