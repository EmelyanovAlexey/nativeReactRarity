import axios from "axios";
import { RegisterFXParam } from "../types";

export const registerAPI = async (params: RegisterFXParam) => {
  debugger;

  const response = await axios.post("/auth/register", params);
  return response.data;
};
