import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTiktok, FaVimeoV } from "react-icons/fa";
import { GrSnapchat } from "react-icons/gr";

const Footer = () => {
  const location = useLocation();

  return (
    <footer
      className={`${
        location.pathname.includes("admin-panel") ? "hidden" : "block"
      } text-center bg-footer_bg pt-10`}
    >
      <div className="px-4">
        <h1 className="font-semibold text-heading_color text-2xl mb-2.5">
          Sign up now & get 10% off
        </h1>
        <p className="text-base mb-3">
          " Be the first to know about our new arrivals and exclusive offers. "
        </p>
        <div>
          <form
            action=""
            method="post"
            className="flex justify-center h-[50px] min-w-[300px] max-w-[400px] m-auto"
          >
            <input
              type="email"
              name="email"
              id="email2"
              className="px-3 outline-none w-[80%] h-full"
              placeholder="Enter your email..."
            />
            <button
              type="submit"
              className="btn-basic bg-btn_bg hover:bg-btn_bg_hover text-btn_text hover:text-btn_text_hover uppercase min-w-[80px] h-full"
            >
              Go
            </button>
          </form>
          <div className="flex justify-center my-7">
            <ul className="flex gap-2">
              <li className="rounded-full text-slate-50 h-10 w-10 bg-blue-600">
                <Link
                  to="/"
                  className="flex items-center justify-center h-full w-full"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li className="rounded-full text-slate-50 h-10 w-10 bg-pink-700">
                <Link
                  to="/"
                  className="flex items-center justify-center h-full w-full"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li className="rounded-full text-slate-50 h-10 w-10 bg-black">
                <Link
                  to="/"
                  className="flex items-center justify-center h-full w-full"
                >
                  <FaTiktok />
                </Link>
              </li>
              <li className="rounded-full text-slate-50 h-10 w-10 bg-blue-600">
                <Link
                  to="/"
                  className="flex items-center justify-center h-full w-full"
                >
                  <GrSnapchat />
                </Link>
              </li>
              <li className="rounded-full text-slate-50 h-10 w-10 bg-sky-500">
                <Link
                  to="/"
                  className="flex items-center justify-center h-full w-full"
                >
                  <FaVimeoV />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-2 justify-center">
            <ul className="flex gap-3 flex-wrap justify-center">
              <li className="relative after:content-[''] after:w-[2px] after:h-[60%] after:translate-y-[-50%] after:top-[50%]  after:bg-gray-400 after:absolute after:right-[0px] pr-3">
                <Link to={"/"}>Prices Drop</Link>
              </li>
              <li className="relative after:content-[''] after:w-[2px] after:h-[60%] after:translate-y-[-50%] after:top-[50%]  after:bg-gray-400 after:absolute after:right-[0px] pr-3">
                <Link to={"/"}>New Products</Link>
              </li>
              <li className="relative after:content-[''] after:w-[2px] after:h-[60%] after:translate-y-[-50%] after:top-[50%]  after:bg-gray-400 after:absolute after:right-[0px] pr-3">
                <Link to={"/"}>Best Sales</Link>
              </li>
              <li className="relative after:content-[''] after:w-[2px] after:h-[60%] after:translate-y-[-50%] after:top-[50%]  after:bg-gray-400 after:absolute after:right-[0px] pr-3">
                <Link to={"/"}>Contact us</Link>
              </li>
              <li>
                <Link to={"/"}>Sitemap</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex p-5 bg-footer_bottom_bg text-footer_bottom_text mt-8">
        <div>
          <p>© 2022, Zoom Sectioned Shopify Theme</p>
        </div>
        <div className="flex">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
