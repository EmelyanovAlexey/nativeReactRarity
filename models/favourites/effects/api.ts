import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { getUrl } from "@/shared/getUrl";

export const getCardsFavouritesAPI = async () => {
  const token = await AsyncStorage.getItem("token");

  const response = await axios.get(getUrl("items/favourites"), {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
