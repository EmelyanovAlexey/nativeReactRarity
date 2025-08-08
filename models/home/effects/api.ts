import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { getUrl } from "@/shared/getUrl";
import { getCardsFxParam } from "../types";

export const getCardsAPI = async (param: getCardsFxParam) => {
  let url = "items";
  let isHasParam = false;

  if (param.countryName?.length > 0) {
    url = `${url}${isHasParam ? "&" : "?"}country_name=${
      param.countryName[0].name
    }`;
    isHasParam = true;
  }

  if (param.manufacturerName?.length > 0) {
    const arr = param.manufacturerName.map(
      (el) => `manufacturer_name=${el.name}`
    );
    url = `${url}${isHasParam ? "&" : "?"}${arr.join("&")}`;
    isHasParam = true;
  }

  if (param.regionName?.length > 0) {
    url = `${url}${isHasParam ? "&" : "?"}region_name=${
      param.regionName[0].name
    }`;
    isHasParam = true;
  }

  if (param.symbolName?.length > 0) {
    url = `${url}${isHasParam ? "&" : "?"}symbol_name=${
      param.symbolName[0].name
    }`;
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
