import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { getUrl } from "@/shared/getUrl";
import { getCardsPhotoFxParam } from "@/models/home/types";
import { getParamForCard } from "../utils";

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
  let url = getParamForCard("items/find_by_image", param);

  if (param.photoUri && param.photoUri !== "" && param.photoUri !== null) {
    formData.append("base64", param.photoUri); // base64img
  }

  const token = await AsyncStorage.getItem("token");
  const response = await axios.post(getUrl(url), formData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

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

export const getCardsLengthAPI = async (param: getCardsPhotoFxParam) => {
  const formData = new FormData();
  let isHaveImg = false;
  const token = await AsyncStorage.getItem("token");

  if (param.photoUri && param.photoUri !== "" && param.photoUri !== null) {
    formData.append("base64", param.photoUri); // base64img
    isHaveImg = true;
  }

  if (isHaveImg) {
    let url = getParamForCard("find_by_image/length", param);
    const response = await axios.post(getUrl(url), formData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  let url = getParamForCard("items/length", param);
  const response = await axios.get(getUrl(url), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
