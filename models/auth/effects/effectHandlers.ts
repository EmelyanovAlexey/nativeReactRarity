import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserModel, loginFxResponse, BaseResponse } from "../types";

export function loginFxDoneHandler(
  state: UserModel,
  data: loginFxResponse
): UserModel {
  const [header, payload, signature] = data.id_token.split(".");
  const decodedPayload = JSON.parse(
    atob(payload.replace(/-/g, "+").replace(/_/g, "/"))
  );

  AsyncStorage.setItem("token", data.id_token);

  return {
    ...state,
    email: decodedPayload.email,
    name: "User",
    id_token: data.id_token,
  };
}

export function registerFxDoneHandler(state: UserModel, p: any): UserModel {
  return { ...state, email: "ivanov@gmail.com", name: "User" };
}

export function setUserEventHandler(
  state: UserModel,
  param: { email: string; name: string }
): UserModel {
  return { ...state, email: param.email, name: param.name };
}
