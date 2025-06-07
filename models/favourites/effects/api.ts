import axios from "axios";
import { getUrl } from "@/shared/getUrl";

export const getCardsFavouritesAPI = async () => {
  const response = await axios.get(getUrl("items/favourites"), {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data;
};
