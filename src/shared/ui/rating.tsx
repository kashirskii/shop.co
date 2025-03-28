import { useState } from "react";

interface RatingProps {
  value: number;
  max?: number;
  onChange?: (value: number) => void; 
  readonly?: boolean;
  className?: string; 
  starClassName?: string; 
}

export const Rating = ({
  value: initialValue,
  max = 5,
  readonly = false,
  onChange,
  className = "",
  starClassName = "h-5 w-5",
}: RatingProps) => {
  const [value, setValue] = useState(initialValue);
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const displayValue = hoverValue !== null ? hoverValue : value;

  const handleMouseEnter = (starIndex: number) => {
    if (!readonly) {
      setHoverValue(starIndex + 1);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverValue(null);
    }
  };

  const handleClick = (starIndex: number) => {
    if (!readonly) {
      const newValue = starIndex + 1;
      setValue(newValue);
      onChange?.(newValue);
    }
  };

  const stars = Array.from({ length: max }, (_, i) => {
    const isFilled = displayValue > i;
    const fillPercentage = isFilled
      ? displayValue - i >= 1
        ? 100
        : (displayValue - i) * 100
      : 0;

    return (
      <span
        className={`relative cursor-pointer ${
          readonly ? "pointer-events-none" : ""
        }`}
        onMouseEnter={() => handleMouseEnter(i)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleClick(i)}
        key={i}
        aria-label={`Rate ${i + 1} out of ${max}`}
        role="radio"
        aria-checked={value > i}
      >
        <span
          className="absolute overflow-hidden"
          style={{ width: `${fillPercentage}%` }}
          aria-hidden
        >
          <StarIcon className={starClassName} filled />
        </span>

        <StarIcon className={starClassName} filled={false} />
      </span>
    );
  });

  return (
    <div
      className={`w-min flex fill-[#FFC633] ${className}`}
      role="radiogroup"
      aria-label="Rating"
    >
      {stars}
    </div>
  );
};

const StarIcon = ({
  className,
  filled,
}: {
  className: string;
  filled: boolean;
}) => (
  <span className="flex">
    <svg
      className={`shrink-0 ${className}`}
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid={filled ? "StarIcon" : "StarBorderIcon"}
    >
      {filled ? (
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      ) : (
        <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" />
      )}
    </svg>
  </span>
);
