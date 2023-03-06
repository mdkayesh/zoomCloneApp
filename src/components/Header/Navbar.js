import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";
import Cart from "../Cart";
import { CgShoppingCart } from "react-icons/cg";
import { UseProductContext } from "../Context/ProductContext";
import SearchFilterProducts from "./SearchFilterProducts";
import { UseCartContext } from "../Context/CartContext";
import LoginForm from "./LoginForm";

const Navbar = () => {
  // context
  const { searchProducts } = UseProductContext();
  const { cartOpen } = UseCartContext();

  // state

  const [show, setshow] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [loginOpen, setloginOpen] = useState(false);
  const logIn = useRef(null);
  const search = useRef(null);

  const handleClick = () => {
    document.addEventListener("click", (e) => {
      if (e.target.closest("#login") === logIn.current) {
        if (e.target.closest("#loginBtn")) {
          setloginOpen(!loginOpen);
        } else {
          setloginOpen(true);
        }
      } else {
        setloginOpen(false);
      }
    });
  };

  const handleSearch = () => {
    document.addEventListener("click", (e) => {
      if (e.target.closest("#searchMoblie") === search.current) {
        if (e.target.closest("#searchBtn")) {
          setIsSearchOpen(!isSearchOpen);
        } else {
          setIsSearchOpen(true);
        }
      } else {
        setIsSearchOpen(false);
      }
    });
  };

  return (
    <div className="bg-inherit">
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center ml-3 text-2xl lg:hidden">
          <AiOutlineMenu
            className="mr-1.5 cursor-pointer"
            onClick={() => setshow(!show)}
          />
          <div className="searchMobile relative" id="searchMoblie" ref={search}>
            <IoSearchOutline
              className="cursor-pointer"
              onClick={handleSearch}
              id="searchBtn"
            />
            <div
              className={`${
                isSearchOpen ? "scale-x-1 opacity-1" : "scale-x-0 opacity-0"
              } searchInput absolute top-[140%] left-0 min-w-[150px] z-20 transition-all duration-300 overflow-hidden`}
            >
              <div className="relative">
                <input
                  type="search"
                  name="searchMobile"
                  id="searchMobile"
                  className="outline-none border py-2 pl-2 pr-8 text-sm"
                  onChange={searchProducts}
                />
                <IoSearchOutline className="cursor-pointer absolute right-2 top-[50%] translate-y-[-50%]" />
              </div>
            </div>
            <SearchFilterProducts />
          </div>
        </div>
        <div className="logo">
          <Link to={"/"}>
            <img
              src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/logo_1_large.png?v=1655870898"
              alt="logo"
            />
          </Link>
        </div>
        {/* navigation */}
        <MobileNav show={show} setShow={setshow} />
        <Navigation />
        <div
          className={`fixed z-10 right-0 top-0 w-full h-full bg-black/[0.3]  transition duration-500 ease-in-out cursor-poiner lg:hidden ${
            show ? "opacity-1 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setshow(!show)}
        ></div>

        {/* search */}
        <div className="flex">
          <div className="search hidden relative lg:block">
            <input
              className="border px-3 py-1.5 rounded-full outline-none"
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
              onChange={searchProducts}
            />
            <AiOutlineSearch className="absolute top-[50%] translate-y-[-50%] right-3 font-bold cursor-pointer text-lg" />
            <SearchFilterProducts />
          </div>
          <div className="flex items-center ml-2">
            <div className="relative" ref={logIn} id="login">
              <BsPerson
                id="loginBtn"
                className="cursor-pointer text-xl font-bold"
                onClick={() => handleClick()}
              />
              <div
                className={`absolute left-[-260px] top-[175%] transition-all duration-400 border border-gray-300 p-4 min-w-[300px] bg-white text-center shadow-lg z-20 ${
                  loginOpen
                    ? "animate-[scaleUp_0.4s_ease-in-out]"
                    : "scale-0 opacity-0"
                }`}
              >
                <h2 className="font-[500] text-xl">Login</h2>
                <LoginForm />
              </div>
            </div>
            <div>
              <CgShoppingCart
                className="ml-1.5 cursor-pointer text-xl font-bold"
                onClick={cartOpen}
              />
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
