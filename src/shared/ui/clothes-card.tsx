export const ClothesCard = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div className={`flex gap-4 ${className}`} {...props} draggable={false} />
);

export const Image = ({
  className,
  src,
  ...props
}: React.ComponentProps<"div"> & { src: string }) => {
  return (
    <div
      className={`max-w-[300px] max-h-[300px] bg-[#F0EEED] rounded-2xl pointer-events-none select-none ${className}`}
      {...props}
    >
      <img src={src} className="w-full h-full" />
    </div>
  );
};

Image.displayName = "ClothesCardImage";
ClothesCard.Image = Image;

export const Title = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={`font-bold text-xl leading-none tracking-tight ${className}`}
    {...props}
  />
);

Title.displayName = "ClothesCardTitle";
ClothesCard.Title = Title;

export const Content = ({
  className,
  ...props
}: React.ComponentProps<"div">) => (
  <div className={`flex gap-2 ${className}`} {...props} />
);

Content.displayName = "ClothesCardContent";
ClothesCard.Content = Content;

export const Price = ({ className, ...props }: React.ComponentProps<"div">) => (
  <div
    className={`font-bold text-2xl tracking-tight ${className}`}
    {...props}
  />
);

Price.displayName = "ClothesCardPrice";
ClothesCard.Price = Price;
