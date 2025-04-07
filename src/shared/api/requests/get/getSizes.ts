import { instance } from "@/shared/api/instance";
import type { RequestConfig, Size } from "@/shared/api/types";

export const getSizes: RequestConfig<object, Size[]> = ({
  params,
  config,
} = {}) =>
  instance.get("/sizes", {
    ...config,
    params: { ...config?.params, ...params },
  });
