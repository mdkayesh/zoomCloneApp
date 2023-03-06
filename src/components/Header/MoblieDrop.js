import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const kids = [
  {
    title: "Kids Toys",
    url: "/",
  },
  {
    title: "Hanky Set",
    url: "/",
  },
  {
    title: "Bath Toys",
    url: "/",
  },
  {
    title: "Kids Wear",
    url: "/",
  },
  {
    title: "Bath Accessories",
    url: "/",
  },
  {
    title: "Baba Suits",
    url: "/",
  },
  {
    title: "Denim",
    url: "/",
  },
];

const men = [
  {
    title: "T-shirts & Shirts",
    url: "/",
  },
  {
    title: "Blazers & Coats",
    url: "/",
  },
  {
    title: "Jackets",
    url: "/",
  },
  {
    title: "Sports & Active Wear",
    url: "/",
  },
  {
    title: "T Shirts & Tanks",
    url: "/",
  },
  {
    title: "Denim",
    url: "/",
  },
  {
    title: "Tanks & Jecket",
    url: "/",
  },
];

const women = [
  {
    title: "Dresses",
    url: "/",
  },
  {
    title: "Sarees",
    url: "/",
  },
  {
    title: "Denim",
    url: "/",
  },
  {
    title: "Sweatshirts",
    url: "/",
  },
  {
    title: "Coats & Jackets",
    url: "/",
  },
  {
    title: "Tops",
    url: "/",
  },
  {
    title: "Watches",
    url: "/",
  },
];

const category = [
  {
    name: "kids",
    kids,
  },
  {
    name: "men",
    men,
  },
  {
    name: "women",
    women,
  },
];

const MoblieDrop = ({ dropOpen }) => {
  const [categoryName, setCategoryName] = useState({
    kids: false,
    men: false,
    women: false,
  });

  const handleClick = (name) => {
    switch (name) {
      case "kids":
        return setCategoryName({
          men: false,
          women: false,
          kids: !categoryName.kids,
        });
      case "men":
        return setCategoryName({
          men: !categoryName.men,
          women: false,
          kids: false,
        });
      case "women":
        return setCategoryName({
          men: false,
          women: !categoryName.women,
          kids: false,
        });
      default:
        return { ...categoryName };
    }
  };

  return (
    <div
      className={`dropdown px-3 overflow-hidden transition-all duration-500 ${
        dropOpen ? "max-h-[600px]" : "max-h-0"
      }`}
    >
      <div className="">
        {category.map((item, index) => (
          <div key={index} className="">
            <h4
              className="flex justify-between text-lg capitalize text-heading_color cursor-pointer py-1"
              onClick={() => handleClick(item.name)}
            >
              {item.name}
              {categoryName[item.name] ? <BiChevronUp /> : <BiChevronDown />}
            </h4>
            <ul
              className={`${
                categoryName[item.name] ? "max-h-[400px]" : "max-h-0"
              } pl-2 overflow-hidden transition-all duration-500`}
            >
              {item[item.name].map((item, index) => (
                <li key={index} className="py-1">
                  <Link to={item.url} className="text-base">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoblieDrop;
