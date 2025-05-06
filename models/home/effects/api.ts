import axios from "axios";
import { getUrl } from "@/shared/getUrl";
import { getCardsFxParam } from "../types";

export const getCardsAPI = async (param: getCardsFxParam) => {
  const formData = new FormData();
  let url = "items";

  if (param.countryName) {
    url = `${url}?manufacturer_name=${param.countryName}`;
    formData.append("country_name", param.countryName);
  }

  if (param.manufacturerName) {
    url = `${url}?country_name=${param.manufacturerName}`;
    formData.append("manufacturer_name", param.manufacturerName);
  }

  if (param.regionName) {
    url = `${url}?region_name=${param.regionName}`;
    formData.append("region_name", param.regionName);
  }

  // if (param.photoUri && param.photoUri !== null) {
  //   formData.append("photo", {
  //     uri: param.photoUri,
  //     name: "photo.jpg",
  //     type: "image/jpeg",
  //   } as any);
  // }

  const response = await axios.get(getUrl(url));

  // const response = await axios.post(getUrl("items/search"), formData, {
  //   headers: {
  //     "Content-Type": "multipart/form-data",
  //   },
  // });

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
