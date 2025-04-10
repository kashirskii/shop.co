import { ComponentProps, useEffect } from "react";
import { Color } from "@/shared/api";
import { useMultiSelect } from "@/shared/hooks";
import { ColorChip, Collapsible } from "@/shared/ui";
import { CheckMark } from "@/shared/ui/icons";
import { useFilter } from "../model/store";

interface FilterColorSectionProps extends ComponentProps<"section"> {
  colors: Color[];
}

export const FilterColorSection = ({ colors }: FilterColorSectionProps) => {
  const { selectItem, isSelected, selectedItems } = useMultiSelect<string>();
  const setColor = useFilter((state) => state.setColor);

  useEffect(() => {
    setColor(Array.from(Array.from(selectedItems)));
  }, [selectedItems, setColor]);

  return (
    <section>
      <Collapsible>
        <Collapsible.Trigger>Colors</Collapsible.Trigger>
        <Collapsible.Content>
          <ul className="flex text-black/60 gap-3 flex-wrap">
            {colors.map((color) => {
              return (
                <li
                  key={color.id}
                  onClick={() => selectItem(color.name)}
                  className="relative flex items-center justify-center cursor-pointer"
                >
                  <ColorChip colorTag={color.code} />
                  {isSelected(color.name) ? (
                    <CheckMark className="absolute" />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </Collapsible.Content>
      </Collapsible>
    </section>
  );
};
