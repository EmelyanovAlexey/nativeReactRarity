import { createEffect } from "effector";
import { getCardsDetailAPI, setFavouriteAPI } from "@/models/home/effects/api";
import { getCardsFavouritesAPI } from "./api";

import { ResponseError } from "@/shared/types";
import { CardType, CardDetailType } from "@/models/home/types";

export const getCardsFavouritesFx = createEffect<
  void,
  CardType[],
  ResponseError
>();
getCardsFavouritesFx.use(getCardsFavouritesAPI);

export const getCardsDetailFx = createEffect<
  number,
  CardDetailType,
  ResponseError
>();
getCardsDetailFx.use(getCardsDetailAPI);

export const setFavouriteFx = createEffect<number, CardType, ResponseError>();
setFavouriteFx.use(setFavouriteAPI);
