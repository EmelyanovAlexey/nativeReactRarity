import { createEffect } from "effector";
import {
  countriesAPI,
  regionsAPI,
  citiesAPI,
  manufacturersAPI,
  historyFilterAPI,
} from "./api";

import { ResponseError } from "@/shared/types";
import { FilterOption, ManufacturersFilterOption, HistoryType } from "../types";

import { getCardsFxParam, CardType, CardDetailType } from "@/models/home/types";
import {
  getCardsAPI,
  getCardsDetailAPI,
  setFavouriteAPI,
} from "@/models/home/effects/api";

export const countriesFx = createEffect<
  string | undefined,
  FilterOption[],
  ResponseError
>();
countriesFx.use(countriesAPI);

export const regionsFx = createEffect<
  string | undefined,
  FilterOption[],
  ResponseError
>();
regionsFx.use(regionsAPI);

export const citiesFx = createEffect<
  string | undefined,
  FilterOption[],
  ResponseError
>();
citiesFx.use(citiesAPI);

export const manufacturersFx = createEffect<
  string | undefined,
  ManufacturersFilterOption[],
  ResponseError
>();
manufacturersFx.use(manufacturersAPI);

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

export const getHistoryFilterFx = createEffect<
  void,
  HistoryType[],
  ResponseError
>();
getHistoryFilterFx.use(historyFilterAPI);
