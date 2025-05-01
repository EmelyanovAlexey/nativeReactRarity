import axios from "axios";
import { getUrl } from "@/shared/getUrl";
// import { RegisterFXParam, LoginFXParam } from "../types";

export const countriesAPI = async (name?: string) => {
  let url = "countries";

  if (name) {
    url = `${url}?name=${name}`;
  }

  const response = await axios.get(getUrl(url));
  return response.data;
};

export const regionsAPI = async (name?: string) => {
  let url = "regions";

  if (name) {
    url = `${url}?name=${name}`;
  }

  const response = await axios.get(getUrl(url));
  return response.data;
};

export const citiesAPI = async (name?: string) => {
  let url = "cities";

  if (name) {
    url = `${url}?name=${name}`;
  }

  const response = await axios.get(getUrl(url));
  return response.data;
};

export const manufacturersAPI = async (name?: string) => {
  let url = "manufacturers";

  if (name) {
    url = `${url}?name=${name}`;
  }

  const response = await axios.get(getUrl(url));
  return response.data;
};
