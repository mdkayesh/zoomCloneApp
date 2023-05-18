import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import ModalProduct from "../pages/AdminPanel/ModalProduct";

const Header = () => {
  const location = useLocation();
  const [scrollY, setScrollY] = useState(window.scrollY);
  const [className, setClassName] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  window.addEventListener("scroll", () => {
    setScrollY(window.scrollY);
    if (window.scrollY < scrollY) {
      setClassName("top-0");
    } else {
      setClassName("-top-full");
    }
  });

  return (
    <>
      <header
        className={`${
          location.pathname.includes("admin-panel") ? "hidden" : "block"
        } sticky w-full px-4 z-20 bg-bg_primary border-b ${
          scrollY > 250
            ? `transition-all duration-[1s] ease shadow-lg ${className}`
            : ""
        }`}
      >
        <Navbar />
      </header>
      <Outlet />
      <ModalProduct />
      <Footer />
    </>
  );
};

export default Header;
