import { RequestConfig, Size, instance } from "@/shared/api";

export type GetSizesRequestConfig = RequestConfig<undefined, Size[]>;

export const getSizes: GetSizesRequestConfig = ({ config }) =>
  instance.get("/sizes", config);
