import { useQuery } from "@tanstack/react-query";

import { getColors, GetColorsRequestConfig } from "@/shared/api/requests";
import type { QuerySettings } from "@/shared/api";

export const useGetColorsQuery = (
  settings?: QuerySettings<GetColorsRequestConfig>
) =>
  useQuery({
    queryKey: ["colors"],
    queryFn: () => getColors({ config: settings?.config }),
    ...settings?.options,
  });
