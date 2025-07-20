import { getCardsPhotoFxParam } from "../home/types";

export function getParamForCard(
  url: string,
  param: getCardsPhotoFxParam
): string {
  let urlCopy = url;
  let isHasParam = false;

  if (param.countryName) {
    urlCopy = `${urlCopy}${isHasParam ? "&" : "?"}country_name=${
      param.countryName
    }`;
    isHasParam = true;
  }

  if (param.manufacturerName) {
    urlCopy = `${urlCopy}${isHasParam ? "&" : "?"}manufacturer_name=${
      param.manufacturerName
    }`;
    isHasParam = true;
  }

  if (param.regionName) {
    urlCopy = `${urlCopy}${isHasParam ? "&" : "?"}region_name=${
      param.regionName
    }`;
    isHasParam = true;
  }

  if (param.symbolName) {
    urlCopy = `${urlCopy}${isHasParam ? "&" : "?"}symbol_name=${
      param.symbolName
    }`;
    isHasParam = true;
  }

  if (param.page) {
    urlCopy = `${urlCopy}${isHasParam ? "&" : "?"}page=${param.page}`;
    isHasParam = true;
  }

  if (param.offset) {
    urlCopy = `${urlCopy}${isHasParam ? "&" : "?"}offset=${param.offset}`;
  }

  return urlCopy;
}

export default {};
