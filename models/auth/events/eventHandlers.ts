import { UserModel } from "../types";

export function setErrorEventHandler(
  state: UserModel,
  error: string
): UserModel {
  return { ...state, error };
}

export function setTokenEventHandler(
  state: UserModel,
  token: string
): UserModel {
  return { ...state, id_token: token };
}