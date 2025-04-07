import { instance } from "@/shared/api/instance";
import type { Color, RequestConfig } from "@/shared/api/types";

export const getColors: RequestConfig<object, Color[]> = ({
  params,
  config,
} = {}) =>
  instance.get("/colors", {
    ...config,
    params: { ...config?.params, ...params },
  });
