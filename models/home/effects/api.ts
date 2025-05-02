import axios from "axios";
import { getUrl } from "@/shared/getUrl";
import { getCardsFxParam } from "../types";

export const getCardsAPI = async (param: getCardsFxParam) => {
  let url = "items";

  if (param.countryName) {
    url = `${url}?manufacturer_name=${param.countryName}`;
  }

  if (param.manufacturerName) {
    url = `${url}?country_name=${param.manufacturerName}`;
  }

  if (param.regionName) {
    url = `${url}?region_name=${param.regionName}`;
  }

  const response = await axios.get(getUrl(url));
  return response.data;
};

export const getCardsDetailAPI = async (id: number) => {
  const response = await axios.get(getUrl(`items/${id}`));
  return response.data;
};

export const setFavouriteAPI = async (id: number) => {
  const response = await axios.get(getUrl(`items/${id}/markfav`));
  return response.data;
};
