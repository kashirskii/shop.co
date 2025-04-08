import { useQuery } from "@tanstack/react-query";

import { getSizes, GetSizesRequestConfig } from "@/shared/api/requests";
import { QuerySettings } from "@/shared/api";

export const useGetSizesQuery = (
  settings?: QuerySettings<GetSizesRequestConfig>
) => {
  const query = useQuery({
    queryKey: ["sizes"],
    queryFn: () => getSizes({ config: settings?.config }),
    ...settings?.options,
  });

  const { data: axiosResponse, ...rest } = query;

  return {
    axiosResponse,
    ...rest,
  };
};
