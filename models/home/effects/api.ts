import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { getUrl } from "@/shared/getUrl";
import { getCardsFxParam } from "../types";

export const getCardsAPI = async (param: getCardsFxParam) => {
  const formData = new FormData();
  let url = "items";
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

  const token = await AsyncStorage.getItem("token");

  const response = await axios.get(getUrl(url), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getCardsDetailAPI = async (id: number) => {
  const token = await AsyncStorage.getItem("token");

  const response = await axios.get(getUrl(`items/${id}`), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const setFavouriteAPI = async (id: number) => {
  const token = await AsyncStorage.getItem("token");

  const response = await axios.put(getUrl(`items/${id}/markfav`), null, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
