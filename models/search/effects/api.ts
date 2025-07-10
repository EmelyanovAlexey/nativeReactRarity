import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { getUrl } from "@/shared/getUrl";
import { getCardsPhotoFxParam } from "@/models/home/types";

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

  const token = await AsyncStorage.getItem("token");

  const response = await axios.get(getUrl(url), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const manufacturersAPI = async (name?: string) => {
  let url = "manufacturers";
  const token = await AsyncStorage.getItem("token");

  if (name) {
    url = `${url}?name=${name}`;
  }

  const response = await axios.get(getUrl(url), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const historyFilterAPI = async () => {
  let url = "search_history";
  const token = await AsyncStorage.getItem("token");

  const response = await axios.get(getUrl(url), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getCardsPhotoAPI = async (param: getCardsPhotoFxParam) => {
  const formData = new FormData();
  let url = "items/find_by_image";
  let isHasParam = false;

  if (param.countryName) {
    url = `${url}${isHasParam ? "&" : "?"}country_name=${param.countryName}`;
    isHasParam = true;
  }

  if (param.manufacturerName) {
    url = `${url}${isHasParam ? "&" : "?"}manufacturer_name=${
      param.manufacturerName
    }`;
    isHasParam = true;
  }

  if (param.regionName) {
    url = `${url}${isHasParam ? "&" : "?"}region_name=${param.regionName}`;
    isHasParam = true;
  }

  if (param.symbolName) {
    url = `${url}${isHasParam ? "&" : "?"}symbol_name=${param.symbolName}`;
    isHasParam = true;
  }

  if (param.page) {
    url = `${url}${isHasParam ? "&" : "?"}page=${param.page}`;
    isHasParam = true;
  }

  if (param.offset) {
    url = `${url}${isHasParam ? "&" : "?"}offset=${param.offset}`;
  }

  if (param.photoUri && param.photoUri !== null) {
    formData.append("base64", param.photoUri); // base64img
  }

  const token = await AsyncStorage.getItem("token");
  const response = await axios.post(
    getUrl(url),
    // {'base64': param.photoUri},
    formData,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const searchFilterParamFxAPI = async (param: string) => {
  let url = `items/search?query=${param}`;
  const token = await AsyncStorage.getItem("token");

  const response = await axios.get(getUrl(url), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
