import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import MoblieDrop from "./MoblieDrop";

const links = [
  { title: "Home", url: "/" },
  { title: "Category", url: "category", drop: true },
  { title: "Collection", url: "collection" },
  { title: "About Us", url: "about" },
  { title: "Contact", url: "contact" },
  { title: "Blog", url: "Blog" },
];

const MobileNav = ({ show, setShow }) => {
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <nav
      className={`mobile-nav overflow-auto ${show ? "left-0" : "left-[-100%]"}`}
    >
      <ul className="flex flex-col lg:flex-row lg:gap-4">
        {links.map((link, index) => (
          <li
            key={index}
            className="border-b unset border-gray-200 py-2.5 lg:border-none"
          >
            <Link
              to={link.url}
              className="flex items-center justify-between text-lg hover:text-primary hover:font-semibold"
              onClick={() =>
                link.drop ? setDropOpen(!dropOpen) : setShow(false)
              }
            >
              {link.title}
              {link.drop ? (
                dropOpen ? (
                  <BiChevronUp className="text-lg mt-0.5 font-light" />
                ) : (
                  <BiChevronDown className="text-lg mt-0.5 font-light" />
                )
              ) : null}
            </Link>
            {link.drop ? <MoblieDrop dropOpen={dropOpen} /> : null}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
