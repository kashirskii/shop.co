import { useQuery } from "@tanstack/react-query";

import { getColors, GetColorsRequestConfig } from "@/shared/api/requests";
import type { QuerySettings } from "@/shared/api";

export const useGetColorsQuery = (
  settings?: QuerySettings<GetColorsRequestConfig>
) => {
  const query = useQuery({
    queryKey: ["colors"],
    queryFn: () => getColors({ config: settings?.config }),
    ...settings?.options,
  });

  const { data: axiosResponse, ...rest } = query;

  return {
    axiosResponse,
    ...rest,
  };
};
