import { createContext, useContext, useState } from "react";
import { Arrow } from "./icons/arrrow";

interface CollapsibleProps {
  open?: boolean;
  setOpen?: React.Dispatch<boolean>;
  children: React.ReactNode;
}

interface CollapsibleContext {
  open: boolean;
  setOpen: React.Dispatch<boolean>;
}

const CollapsibleContext = createContext<CollapsibleContext>({
  open: false,
  setOpen: () => {},
});

export const Collapsible = ({
  open: controlledOpen,
  setOpen: controlledSetOpen,
  children,
}: CollapsibleProps) => {
  const [internalOpen, setInternalOpen] = useState(false);

  const open = controlledOpen ?? internalOpen;
  const setOpen = controlledSetOpen ?? setInternalOpen;

  return (
    <CollapsibleContext.Provider value={{ open, setOpen }}>
      {children}
    </CollapsibleContext.Provider>
  );
};

const Trigger = ({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  const { open, setOpen } = useContext(CollapsibleContext);

  return (
    <div
      role="button"
      onClick={() => setOpen(!open)}
      className="font-bold text-xl mb-5 flex items-center justify-between"
      {...props}
    >
      {children}
      <Arrow
        className={`${
          open ? "rotate-[0deg]" : ""
        } transition-all duration-300 rotate-[-180deg]`}
      />
    </div>
  );
};

const Content = ({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  const { open } = useContext(CollapsibleContext);

  return (
    <div
      {...props}
      className={`${
        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      } grid transition-[grid-template-rows] duration-500`}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

Collapsible.Trigger = Trigger;
Collapsible.Content = Content;
