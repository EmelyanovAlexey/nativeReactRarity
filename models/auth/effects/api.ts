import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { getUrl } from "@/shared/getUrl";
import { RegisterFXParam, LoginFXParam } from "../types";

// Эффект для авторизации
export const loginAPI = async (params: LoginFXParam) => {
  try {
    const response = await axios.post(getUrl("plain/login"), params);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      console.error("Ошибка авторизации:", error.response.data.error);
      throw error.response.data.error;
    }
    console.error("Неожиданная ошибка:", error);
    throw error;
  }
};

export const registerAPI = async (params: RegisterFXParam) => {
  try {
    const response = await axios.post(getUrl("plain/register"), params);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 400) {
      console.error("Ошибка авторизации:", error.response.data.error);
      throw error.response.data.error;
    }
    console.error("Неожиданная ошибка:", error);
    throw error;
  }
};

export const loginGoogleAPI = async () => {
  window.location.href = getUrl("google/login");
  const response = await axios.get(getUrl("google/login"));
  return response.data;
};

export const deleteUserAPI = async () => {
  const response = await axios.delete(getUrl("common-auth/users/me/"));
  return response.data;
};

export const setPasswordAPI = async (params: {
  currentPassword: string;
  newPassword: string;
}) => {
  const token = await AsyncStorage.getItem("token");

  const response = await axios.put(getUrl(`plain/password?id_token=${token}`), {
    current_password: params.currentPassword,
    new_password: params.newPassword,
  });
  return response.data;
};
