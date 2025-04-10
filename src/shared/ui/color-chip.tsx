interface ColorChip
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  colorTag: string;
}

export const ColorChip = ({ colorTag, ...props }: ColorChip) => {
  return (
    <div
      {...props}
      className="w-[37px] h-[37px] rounded-full inset-ring-black/20 inset-ring-2"
      style={{ backgroundColor: colorTag }}
    />
  );
};
