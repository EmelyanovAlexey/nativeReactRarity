import { createEffect } from "effector";
import { countriesAPI, regionsAPI, citiesAPI, manufacturersAPI } from "./api";

import { ResponseError } from "@/shared/types";
import { FilterOption, ManufacturersFilterOption } from "../types";

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
