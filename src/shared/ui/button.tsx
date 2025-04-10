import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const button = cva("px-12 py-[14px] rounded-full cursor-pointer", {
  variants: {
    view: {
      primary: "bg-black text-white",
      secondary: "bg-white text-black",
      outlined: "border-black/10 border-1",
    },
  },
  defaultVariants: { view: "primary" },
});

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  view,
  children,
  className,
  ...props
}) => {
  return (
    <button className={button({ view, className })} {...props}>
      {children}
    </button>
  );
};
