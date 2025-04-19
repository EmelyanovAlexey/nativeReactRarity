import { UserModel, RegisterFXParam, BaseResponse } from "../types";

export function registerFxDoneHandler(state: UserModel, p: any): UserModel {
  return { ...state, email: "ivanov@gmail.com", name: "User" };
}
