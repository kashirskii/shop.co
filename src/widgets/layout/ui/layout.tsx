import { Link, Outlet } from "react-router";
import { SearchBar } from "./search-bar";
import { CartIcon } from "./cart-icon";
import { ProfileIcon } from "./profile-icon";

export const Layout = () => {
  return (
    <>
      <header>
        <div className="flex flex-row items-center justify-center max-w-[1288px] px-6 py-6 mx-auto h-24 gap-10">
          <span className="font-(family-name:--IntegralCF-Bold) text-[32px] pb-2">
            <Link to={""}>SHOP.CO</Link>
          </span>

          <ul className="flex flex-row gap-10 h-full items-center text-center">
            <li>
              <Link to={"#"}>Shop</Link>
            </li>
            <li>
              <Link to={"#"}>On Sale</Link>
            </li>
            <li>
              <Link to={"#"}>New Arrivals</Link>
            </li>
            <li>
              <Link to={"#"}>Brands</Link>
            </li>
          </ul>
          <SearchBar />
          <div className="flex flex-row gap-[14px] h-full items-center">
            <CartIcon />
            <ProfileIcon />
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
