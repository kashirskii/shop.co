import { Link } from "react-router";

export const LinkList = () => {
  return (
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
  );
};
