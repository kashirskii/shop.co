import { useEffect } from "react";
import { Chip, Collapsible } from "@/shared/ui";
import { useMultiSelect } from "@/shared/hooks";
import { Size } from "@/shared/api";
import { useFilter } from "../model/store";

interface FilterSizeSectionProps {
  sizes: Size[];
}

export const FilterSizeSection = ({ sizes }: FilterSizeSectionProps) => {
  const { selectItem, isSelected, selectedItems } = useMultiSelect<string>();
  const setSize = useFilter((state) => state.setSize);

  useEffect(() => {
    setSize(Array.from(Array.from(selectedItems)));
  }, [selectedItems, setSize]);

  return (
    <section>
      <Collapsible>
        <Collapsible.Trigger>Size</Collapsible.Trigger>
        <Collapsible.Content>
          <ul className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <li key={size.id} onClick={() => selectItem(size.name)}>
                <Chip
                  label={size.name}
                  className={
                    isSelected(size.name) ? " bg-black text-white" : ""
                  }
                />
              </li>
            ))}
          </ul>
        </Collapsible.Content>
      </Collapsible>
    </section>
  );
};
