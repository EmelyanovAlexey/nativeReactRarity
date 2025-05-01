import { USE_MOCK } from "@/shared/constants";

export function getUrl(param: string): string {
  if (USE_MOCK) {
    return `http://localhost:3001/${param}`;
  }

  return `http://127.0.0.1:8000/${param}`;
}
