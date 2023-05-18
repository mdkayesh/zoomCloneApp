import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { TbWallpaper } from "react-icons/tb";
import { BiMessageSquareAdd } from "react-icons/bi";
import { UseBlogContext } from "../../Context/BlogContext";
import { BsLink45Deg } from "react-icons/bs";

const sidebarLinks = [
  {
    title: "Dashboard",
    url: "dashboard",
    icon: <AiOutlineHome className="mr-2" />,
  },
  {
    title: "All Products",
    url: "products",
    icon: <CgShoppingCart className="mr-2" />,
  },
  {
    title: "Orders",
    url: "orders",
    icon: <TbWallpaper className="mr-2" />,
  },

  {
    title: "Add Products",
    url: "add-product",
    icon: <BiMessageSquareAdd className="mr-2" />,
  },
  {
    title: "Storefront!",
    url: "/",
    icon: <BsLink45Deg className="mr-2" />,
  },
];

const SideBar = () => {
  const { isSidebarShow, setIsSidebarShow } = UseBlogContext();

  return (
    <div
      className={`${
        isSidebarShow ? "left-0" : "-left-full"
      } [&_.active]:bg-primary [&_.active]:text-white py-3 bg-white border-r border-gray-200 fixed top-0 h-[100vh] shadow-lg w-[60%]  overflow-auto pt-[90px] z-10 max-w-[300px] lg:left-0 lg:w-[20%] lg:block transition-all`}
    >
      <nav>
        <ul>
          {sidebarLinks.map((link, index) => (
            <li className="" key={index} onClick={setIsSidebarShow}>
              <NavLink
                to={link.url}
                className="flex items-center px-3 py-2 hover:text-btn_text hover:bg-primary hover:pl-4 transition-all duration-500"
              >
                {link.icon}
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
