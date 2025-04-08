import {
  instance,
  GetClothesParams,
  PageClothingResponseDto,
  RequestConfig,
} from "@/shared/api";

export type GetClothesRequestConfig = RequestConfig<
  GetClothesParams,
  PageClothingResponseDto
>;

export const getClothes: GetClothesRequestConfig = ({ params, config } = {}) =>
  instance.get("/clothes", {
    params: { ...config?.params, ...params },
    ...config,
  });
