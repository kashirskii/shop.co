import { ComponentProps } from "react";

export const Skeleton = ({ className, ...props }: ComponentProps<"div">) => {
  return (
    <div
      className={`animate-pulse rounded-md bg-[#f5f5f4] ${className}`}
      {...props}
    />
  );
};
