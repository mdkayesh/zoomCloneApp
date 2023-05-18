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
import { useAuthContext } from "../Context/AuthContext";

const Navbar = () => {
  // context
  const { searchProducts } = UseProductContext();
  const { cartOpen } = UseCartContext();
  const { currentUser, logOut } = useAuthContext();

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
            <form action="">
              <input
                className="border px-6 py-1.5 rounded-full outline-none"
                type="search"
                name="search"
                id="search"
                placeholder="Search..."
                onChange={searchProducts}
              />
              <AiOutlineSearch className="absolute top-[50%] translate-y-[-50%] right-3 font-bold cursor-pointer text-lg" />
              <SearchFilterProducts />
            </form>
          </div>
          <div className="flex items-center ml-2">
            {loginOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-[#00000059] md:hidden"></div>
            )}

            <div className="relative" ref={logIn} id="login">
              <BsPerson
                id="loginBtn"
                className="cursor-pointer text-xl font-bold"
                onClick={() => handleClick()}
              />
              <div
                className={`fixed left-1/2 top-1/2 w-[80vw] -translate-x-1/2 -translate-y-1/2 transition-transform duration-400 border border-gray-300 p-4 bg-white text-center shadow-lg z-20 md:absolute md:left-[-300px] md:top-full md:-translate-x-0 md:-translate-y-0 md:max-w-[300px] ${
                  loginOpen
                    ? "scale-100 opacity-100 md:animate-[scaleUp_0.4s_ease-in-out]"
                    : "scale-0 opacity-0"
                }`}
              >
                {!currentUser ? (
                  <>
                    <h2 className="font-[500] text-xl">Login</h2>
                    <LoginForm />
                  </>
                ) : (
                  <div className="userinfo">
                    <div className="flex gap-4 items-center justify-center">
                      <img
                        src={currentUser.photoURL}
                        alt="userImage"
                        className="min-w-[50px] max-w-[60px] rounded-full"
                      />
                      <h1 className="text-lg font-semibold">
                        {currentUser.displayName}
                      </h1>
                    </div>

                    {currentUser.uid === process.env.REACT_APP_ADMIN_ID && (
                      <p className="text-green-500 mt-3">Admin</p>
                    )}
                    <div className="flex justify-between">
                      {currentUser.uid === process.env.REACT_APP_ADMIN_ID && (
                        <Link
                          to={"/admin-panel/dashboard"}
                          className="btn-basic mt-8 text-btn_text bg-btn_bg hover:bg-btn_bg_hover hover:text-btn_text_hover"
                        >
                          Admin Panel
                        </Link>
                      )}

                      <button
                        type="button"
                        className="btn-basic mt-8 text-btn_text bg-btn_bg hover:bg-btn_bg_hover hover:text-btn_text_hover"
                        onClick={logOut}
                      >
                        log Out
                      </button>
                    </div>
                  </div>
                )}
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
