import { Link, Outlet } from "react-router";
import { SearchBar } from "./search-bar";
import { CartIcon } from "@/shared/ui/icons/cart";
import { ProfileIcon } from "@/shared/ui/icons/profile";
import { LinkList } from "./link-list";

export const Layout = () => {
  return (
    <>
      <header>
        <nav className="flex flex-row items-center justify-between max-w-[1288px] px-6 py-6 mx-auto h-24 gap-10">
          <span className="font-(family-name:--IntegralCF-Bold) text-[32px] pb-2">
            <Link to={""}>SHOP.CO</Link>
          </span>

          <LinkList />
          <SearchBar />
          <div className="flex flex-row gap-[14px] h-full items-center">
            <CartIcon />
            <ProfileIcon />
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
