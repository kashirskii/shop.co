import { instance } from "@/shared/api/instance";
import {
  GetClothesParams,
  PageClothingResponseDto,
  RequestConfig,
} from "@/shared/api/types";

export const getClothes: RequestConfig<
  GetClothesParams,
  PageClothingResponseDto
> = ({ params, config } = {}) =>
  instance.get("/clothes", {
    ...config,
    params: { ...config?.params, ...params },
  });
