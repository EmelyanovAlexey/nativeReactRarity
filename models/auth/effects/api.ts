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
