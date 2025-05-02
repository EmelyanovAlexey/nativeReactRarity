import { createEffect } from "effector";
import {
  getCardsAPI,
  getCardsDetailAPI,
  setFavouriteAPI,
} from "@/models/home/effects/api";

import { ResponseError } from "@/shared/types";
import { getCardsFxParam, CardType, CardDetailType } from "@/models/home/types";

export const getCardsFx = createEffect<
  getCardsFxParam,
  CardType[],
  ResponseError
>();
getCardsFx.use(getCardsAPI);

export const getCardsDetailFx = createEffect<
  number,
  CardDetailType,
  ResponseError
>();
getCardsDetailFx.use(getCardsDetailAPI);

export const setFavouriteFx = createEffect<number, CardType, ResponseError>();
setFavouriteFx.use(setFavouriteAPI);
