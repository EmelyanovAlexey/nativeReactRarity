import axios from "axios";
import { getUrl } from "@/shared/getUrl";
import { getCardsFxParam } from "../types";

export const getCardsAPI = async (param: getCardsFxParam) => {
  const formData = new FormData();
  let url = "items";
  let isHasParam = false;

  if (param.countryName) {
    url = `${url}${isHasParam ? "&" : "?"}manufacturer_name=${
      param.countryName
    }`;
    formData.append("country_name", param.countryName);
    isHasParam = true;
  }

  if (param.manufacturerName) {
    url = `${url}${isHasParam ? "&" : "?"}country_name=${
      param.manufacturerName
    }`;
    formData.append("manufacturer_name", param.manufacturerName);
    isHasParam = true;
  }

  if (param.regionName) {
    url = `${url}${isHasParam ? "&" : "?"}region_name=${param.regionName}`;
    formData.append("region_name", param.regionName);
    isHasParam = true;
  }

  const response = await axios.get(getUrl(url));

  return response.data;
};

export const getCardsDetailAPI = async (id: number) => {
  const response = await axios.get(getUrl(`items/${id}`));
  return response.data;
};

export const setFavouriteAPI = async (id: number) => {
  const response = await axios.put(getUrl(`items/${id}/markfav`));
  return response.data;
};
