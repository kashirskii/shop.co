import { Color, RequestConfig, instance } from "@/shared/api";

export type GetColorsRequestConfig = RequestConfig<undefined, Color[]>;

export const getColors: GetColorsRequestConfig = ({ config } = {}) =>
  instance.get("/colors", {
    ...config,
  });
