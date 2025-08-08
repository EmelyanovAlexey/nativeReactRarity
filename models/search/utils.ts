import { getCardsPhotoFxParam } from "../home/types";

export function getParamForCard(
  url: string,
  param: getCardsPhotoFxParam
): string {
  let urlCopy = url;
  let isHasParam = false;

  // const addParam = (name: string, value: string) => {
  //   // Убираем декодирование здесь, просто кодируем исходное значение
  //   urlCopy = `${urlCopy}${isHasParam ? "&" : "?"}${name}=${encodeURIComponent(
  //     value
  //   )}`;
  //   isHasParam = true;
  // };

  // if (param.countryName?.length > 0) {
  //   addParam("country_name", param.countryName[0].name);
  // }

  // if (param.manufacturerName?.length > 0) {
  //   param.manufacturerName.forEach((el) => {
  //     addParam("manufacturer_name", el.name);
  //   });
  // }

  // if (param.regionName?.length > 0) {
  //   addParam("region_name", param.regionName[0].name);
  // }

  // if (param.symbolName?.length > 0) {
  //   addParam("symbol_name", param.symbolName[0].name);
  // }

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
