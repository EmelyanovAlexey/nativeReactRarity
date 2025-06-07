import { USE_MOCK } from "@/shared/constants";

export function getUrl(param: string): string {
  if (USE_MOCK) {
    return `http://localhost:3001/${param}`;
  }

  return `https://farforscan.ru/api/${param}`; // `http://localhost:8000/${param}`; // `https://farforscan.ru/api/${param}`;
}
