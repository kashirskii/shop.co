import { useQuery } from "@tanstack/react-query";

import { getClothes, GetClothesRequestConfig } from "@/shared/api/requests";
import { QuerySettings } from "@/shared/api";

export const useGetClothesQuery = (
  settings?: QuerySettings<GetClothesRequestConfig>
) => {
  const query = useQuery({
    queryKey: ["clothes"],
    queryFn: () =>
      getClothes({ config: settings?.config, params: settings?.params || {} }),
    ...settings?.options,
  });

  const { data: axiosResponse, ...rest } = query;

  return {
    axiosResponse,
    ...rest,
  };
};
