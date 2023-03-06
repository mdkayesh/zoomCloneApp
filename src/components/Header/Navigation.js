import React from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import DeskDrop from "./DeskDrop";

const Navigation = () => {
  const links = [
    { title: "Home", url: "/" },
    { title: "Category", url: "category", drop: true },
    { title: "Collection", url: "collection" },
    { title: "About Us", url: "about" },
    { title: "Contact", url: "contact" },
    { title: "Blog", url: "blog" },
  ];

  return (
    <div className="navigation hidden lg:block">
      <nav>
        <ul className="flex flex-col lg:flex-row lg:gap-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                to={link.url}
                className="flex items-center hover:text-primary hover:font-semibold"
              >
                {link.title}
                {link.drop ? (
                  <BiChevronDown className="text-lg mt-0.5 font-light" />
                ) : null}
              </Link>
              {link.drop ? <DeskDrop /> : null}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
