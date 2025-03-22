import { cva, VariantProps } from "class-variance-authority";

const separator = cva("bg-black/10", {
  variants: {
    orientation: {
      vertical: "w-[1px] h-full",
      horizon: "h-[1px] w-full",
    },
  },
  defaultVariants: { orientation: "horizon" },
});

export interface SeparatorProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    VariantProps<typeof separator> {}

export const Separator: React.FC<SeparatorProps> = ({
  orientation,
  className,
  ...props
}) => {
  return <div {...props} className={separator({ orientation, className })} />;
};
