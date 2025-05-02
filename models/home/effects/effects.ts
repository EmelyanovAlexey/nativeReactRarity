import { createEffect } from "effector";
import { getCardsAPI, getCardsDetailAPI, setFavouriteAPI } from "./api";

import { ResponseError } from "@/shared/types";
import { getCardsFxParam, CardType, CardDetailType } from "../types";

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
