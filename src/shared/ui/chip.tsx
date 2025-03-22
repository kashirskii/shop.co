export const Chip = ({
  label,
  className,
  ...props
}: { label: string } & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <div
      {...props}
      className={`px-5 py-[10px] w-fit text-nowrap rounded-4xl cursor-pointer select-none transition-all duration-300 bg-[#F0F0F0] ${className}`}
    >
      {label}
    </div>
  );
};
