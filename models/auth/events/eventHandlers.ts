import { UserModel } from "../types";

export function setErrorEventHandler(
  state: UserModel,
  error: string
): UserModel {
  return { ...state, error };
}
