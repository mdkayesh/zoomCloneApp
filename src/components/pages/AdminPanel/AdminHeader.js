import React from "react";
import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { UseBlogContext } from "../../Context/BlogContext";
import { useAuthContext } from "../../Context/AuthContext";

const AdminHeader = () => {
  const { setIsSidebarShow } = UseBlogContext();
  const { currentUser } = useAuthContext();

  return (
    <header className="flex justify-between items-center py-4 px-3 fixed bg-bg_primary top-0 left-0 w-full z-20 shadow-md">
      <div
        className="menu text-xl cursor-pointer lg:hidden"
        onClick={setIsSidebarShow}
      >
        <AiOutlineMenu />
      </div>

      <div className="logo hidden md:block">
        <Link to="/">
          <img
            src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/logo_5c23a625-dacf-455e-b48b-ca1db741e4fc_large.png?v=1655272218"
            alt="logo"
            width="100%"
          />
        </Link>
      </div>
      <div className="flex gap-3 md:gap-5 items-center">
        <Link
          to="/"
          className="bg-white text-btn_bg rounded-lg border border-btn_bg py-1 px-2 hover:bg-btn_bg hover:text-btn_text transition-all duration-300 hidden lg:block"
        >
          Home
        </Link>
        <div className="text-xl relative">
          <span className="flex h-2.5 w-2.5 absolute right-0 top-[-4px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#40655e] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>

          <IoMdNotificationsOutline />
        </div>
        <div className="rounded-full min-h-[40px] h-[40px] overflow-hidden">
          <img
            src={currentUser?.photoURL}
            alt="profile"
            className="h-full w-full object-fill"
          />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
