import { useGetColorsQuery, useGetSizesQuery } from "@/shared/api/hooks";
import { Separator, Button, Skeleton } from "@/shared/ui";

import { FilterHeader } from "./filter-header";
import { FilterColorSection } from "./filter-color-section";
import { FilterSizeSection } from "./filter-size-section";

interface FilterProps extends React.ComponentProps<"div"> {
  applyFilterHandler: () => void;
}
export const Filter = ({
  applyFilterHandler,
  className,
  ...props
}: FilterProps) => {
  const colors = useGetColorsQuery();
  const sizes = useGetSizesQuery();

  if (colors.isLoading || sizes.isLoading)
    return (
      <Skeleton className="w-[295px] h-[400px] rounded-2xl p-6 border-1 border-transparent" />
    );

  if (colors.axiosResponse && sizes.axiosResponse) {
    return (
      <div
        className={`border-1 border-black/10 w-[295px] h-fit rounded-2xl p-6 gap-6 ${className}`}
        {...props}
      >
        <FilterHeader />
        <Separator className="my-6" />

        <FilterColorSection colors={colors.axiosResponse.data} />
        <Separator className="my-6" />

        <FilterSizeSection sizes={sizes.axiosResponse.data} />
        <Separator className="my-6" />

        <Button onClick={applyFilterHandler} className="w-full text-sm">
          Apply Filter
        </Button>
      </div>
    );
  }
};
