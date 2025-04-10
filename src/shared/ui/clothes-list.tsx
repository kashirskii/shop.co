import { Clothes } from "@/shared/api";
import { Skeleton } from "@/shared/ui/skeleton";

export interface ClothesListProps extends React.ComponentProps<"ul"> {
  clothes: Clothes[];
  renderSlot: (clothing: Clothes) => React.ReactNode;
}

export const ClothesList = ({
  clothes,
  renderSlot,
  ...props
}: ClothesListProps) => {
  return (
    <ul {...props}>
      {clothes.map((clothing) => (
        <li key={clothing.id}>{renderSlot(clothing)}</li>
      ))}
    </ul>
  );
};

interface ClothesListSkeletonProps extends React.ComponentProps<"ul"> {
  renderSlot: React.ReactNode;
  listLength: number;
}

export const ClothesListSkeleton = ({
  renderSlot,
  listLength,
  ...props
}: ClothesListSkeletonProps) => (
  <ul {...props}>
    {[...Array(listLength)].map((_, index) => (
      <li key={index}>
        <Skeleton>{renderSlot}</Skeleton>
      </li>
    ))}
  </ul>
);
