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

  if (param.countryName) {
    formData.append("country_name", param.countryName);
  }

  if (param.manufacturerName) {
    formData.append("manufacturer_name", param.manufacturerName);
  }

  if (param.regionName) {
    formData.append("region_name", param.regionName);
  }

  if (param.symbolName) {
    formData.append("symbol_name", param.symbolName);
  }

  if (param.page) {
    formData.append("page", String(param.page));
  }

  if (param.offset) {
    formData.append("offset", String(param.offset));
  }

  if (param.photoUri && param.photoUri !== null) {
    formData.append("base64", param.photoUri); // base64img
  }

  const response = await axios.post(
    getUrl(url),
    // {'base64': param.photoUri},
    formData,
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
