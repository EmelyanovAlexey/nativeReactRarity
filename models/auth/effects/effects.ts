import { createEffect } from "effector";
import { registerAPI } from "./api";

import { RegisterFXParam, BaseResponse } from "../types";

export const registerFx = createEffect<RegisterFXParam, BaseResponse>();
registerFx.use(registerAPI);
