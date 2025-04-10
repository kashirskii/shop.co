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

export const getClothes: GetClothesRequestConfig = ({
  params,
  config,
} = {}) => {
  const { size, color, ...restParams } = params || {};

  return instance.get("/clothes", {
    params: {
      ...config?.params,
      ...(typeof size !== "undefined" && size.length > 0
        ? { size: size.join(",") }
        : null),
      ...(typeof color !== "undefined" && color.length > 0
        ? { color: color.join(",") }
        : null),
      ...restParams,
    },
    ...config,
  });
};
