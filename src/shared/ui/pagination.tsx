import { cva } from "class-variance-authority";
import { createContext, useContext, useState } from "react";
import { NonNegative } from "../types";

const paginationItem = cva(
  "w-10 h-10 rounded-md flex items-center justify-center cursor-pointer",
  {
    variants: {
      view: {
        selected: "bg-black/6 text-black",
        unselected: "bg-transparent text-black/50",
      },
    },
  }
);

interface PaginationProps<T extends number> {
  count: NonNegative<T>;
  page?: NonNegative<T>;
  defaultPage?: NonNegative<T>;
  boundaryCount?: NonNegative<T>;
  siblingCount?: NonNegative<T>;
  onChange?: (page: number) => void;
  children?: React.ReactNode;
}

interface PaginationContext<T extends number> {
  page: number;
  setPage: NonNullable<PaginationProps<T>["onChange"]>;
  count: PaginationProps<T>["count"];
  siblingCount: NonNullable<PaginationProps<T>["siblingCount"]>;
  boundaryCount: NonNullable<PaginationProps<T>["boundaryCount"]>;
}

const PaginationContext = createContext<PaginationContext<number> | undefined>(
  undefined
);

export const Pagination = <T extends number>({
  page: controlledPage,
  onChange,
  count,
  defaultPage = 1 as NonNegative<T>,
  siblingCount = 1 as NonNegative<T>,
  boundaryCount = 1 as NonNegative<T>,
  className,
  ...props
}: PaginationProps<T> &
  Omit<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    "onChange"
  >) => {
  const [internalPage, setInternalPage] = useState<number>(defaultPage);

  const page = controlledPage ?? internalPage;
  const setPage = onChange ?? setInternalPage;

  return (
    <PaginationContext.Provider
      value={{ count, siblingCount, page, setPage, boundaryCount }}
    >
      <div className={`flex justify-between w-full ${className}`} {...props}>
        <PreviousButton />
        <Items />
        <NextButton />
      </div>
    </PaginationContext.Provider>
  );
};

export const Items = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>) => {
  const context = useContext(PaginationContext);
  if (!context) return null;
  const { page, count, siblingCount, boundaryCount } = context;

  const totalBlocksCount = 3 + siblingCount * 2 + boundaryCount * 2;

  if (count < totalBlocksCount)
    return (
      <ul className={`flex gap-1 ${className}`}>
        {Array.from({ length: count }, (_, index) => (
          <PaginationItem key={index + 1} number={index + 1} />
        ))}
      </ul>
    );

  const shouldShowLeftEllipsis = () =>
    page - siblingCount - (boundaryCount + 1) <= 1;

  const shouldShowRightEllipsis = () =>
    count - boundaryCount - (page + siblingCount) <= 1;

  return (
    <ul className={`flex gap-1 ${className}`} {...props}>
      {[...Array(boundaryCount)].map((_, i) => (
        <li key={boundaryCount + i}>
          <PaginationItem number={i + 1} />
        </li>
      ))}

      {shouldShowLeftEllipsis() ? (
        <li key={boundaryCount + 1}>
          <PaginationItem number={boundaryCount + 1} />
        </li>
      ) : (
        <li key="leftEllipsis">
          <Ellipsis />
        </li>
      )}

      {[...Array(siblingCount * 2 + 1)].map((_, i) => {
        const pageNumber = Math.min(
          Math.max(2 + boundaryCount, page - siblingCount) + i,
          count - boundaryCount - 2 - (siblingCount * 2 - 1) + i
        );
        return (
          <li key={pageNumber}>
            <PaginationItem number={pageNumber} />
          </li>
        );
      })}

      {shouldShowRightEllipsis() ? (
        <li key={count - boundaryCount}>
          <PaginationItem number={count - boundaryCount} />
        </li>
      ) : (
        <li key="rightEllipsis">
          <Ellipsis />
        </li>
      )}

      {[...Array(boundaryCount)].map((_, i) => (
        <li key={count - boundaryCount + i + 1}>
          <PaginationItem number={count - boundaryCount + i + 1} />
        </li>
      ))}
    </ul>
  );
};

const Ellipsis = () => (
  <div className="w-10 h-10 flex items-center justify-center">...</div>
);

const PaginationItem = ({ number }: { number: number }) => {
  const context = useContext(PaginationContext);
  if (!context) return null;

  const { page, setPage } = context;

  return (
    <button
      onClick={() => setPage(number)}
      className={paginationItem({
        view: page == number ? "selected" : "unselected",
      })}
    >
      {number}
    </button>
  );
};

const PreviousButton = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  const context = useContext(PaginationContext);
  if (!context) return null;
  const { page, setPage } = context;

  return (
    <button
      className={`w-fit flex border-black/10 border rounded-md items-center px-4 py-2 gap-3 cursor-pointer ${className}`}
      onClick={() => setPage(page - 1)}
      disabled={page === 1}
      {...props}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.8332 6.99996H1.1665M1.1665 6.99996L6.99984 12.8333M1.1665 6.99996L6.99984 1.16663"
          stroke="black"
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Previous
    </button>
  );
};

const NextButton = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  const context = useContext(PaginationContext);
  if (!context) return null;
  const { page, setPage, count } = context;

  return (
    <button
      className={`w-fit flex border-black/10 border rounded-md items-center px-4 py-2 gap-3 cursor-pointer ${className}`}
      onClick={() => setPage(page + 1)}
      disabled={page === count}
      {...props}
    >
      Next
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.1665 6.99996H12.8332M12.8332 6.99996L6.99984 1.16663M12.8332 6.99996L6.99984 12.8333"
          stroke="black"
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
