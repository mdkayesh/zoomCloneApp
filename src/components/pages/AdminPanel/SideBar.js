import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { CgShoppingCart, CgProfile } from "react-icons/cg";
import { TbWallpaper } from "react-icons/tb";
import { BiMessageSquareAdd } from "react-icons/bi";

const sidebarLinks = [
  {
    title: "Dashboard",
    url: "dashboard",
    icon: <AiOutlineHome className="mr-2" />,
  },
  {
    title: "Products",
    url: "products",
    icon: <CgShoppingCart className="mr-2" />,
  },
  {
    title: "Orders",
    url: "orders",
    icon: <TbWallpaper className="mr-2" />,
  },
  {
    title: "Customers",
    url: "customers",
    icon: <CgProfile className="mr-2" />,
  },
  {
    title: "Add Products",
    url: "add-product",
    icon: <BiMessageSquareAdd className="mr-2" />,
  },
];

const SideBar = () => {
  return (
    <div className="py-3 hidden bg-white border-r border-gray-200 fixed top-0 left-0 h-[100vh] shadow-lg w-[20%] pt-[90px] overflow-auto lg:block">
      <nav>
        <ul>
          {sidebarLinks.map((link, index) => (
            <li className="" key={index}>
              <Link
                to={link.url}
                className="flex items-center px-3 py-2 hover:text-btn_text hover:bg-btn_bg_hover hover:pl-4 transition-all duration-500"
              >
                {link.icon}
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
