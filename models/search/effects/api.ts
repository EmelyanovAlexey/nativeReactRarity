import axios from "axios";
import { getUrl } from "@/shared/getUrl";
import { getCardsPhotoFxParam } from "@/models/home/types";
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

export const historyFilterAPI = async () => {
  let url = "search_history";
  const response = await axios.get(getUrl(url));
  return response.data;
};

export const getCardsPhotoAPI = async (param: getCardsPhotoFxParam) => {
  const formData = new FormData();
  let url = "items/find_by_image";

  if (param.photoUri && param.photoUri !== null) {
    formData.append("base64img", param.photoUri);
  }
  const response = await axios.post(
    getUrl(url),
      {'base64': param.photoUri},
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const searchFilterParamFxAPI = async (param: string) => {
  let url = `items/search?query=${param}`;
  const response = await axios.get(getUrl(url));
  return response.data;
};
