import { LoupeIcon } from "@/shared/ui/icons/loupe";

export const SearchBar = () => {
  return (
    <div className="w-[520px] rounded-4xl h-full bg-[#F0F0F0] flex items-center relative">
      <LoupeIcon className="absolute right-4 pointer-events-none" />
      <input
        placeholder="Search for products..."
        className="h-full w-full pl-6 pr-12 py-1 focus-visible:outline-0"
        spellCheck={false}
      />
    </div>
  );
};
