import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { UseProductContext } from "../../../Context/ProductContext";
import { category } from "../../../Header/DeskDrop";

const ByCategories = ({ activeIndx, handleClick }) => {
  const { updateFilterValue } = UseProductContext();

  return (
    <div className="by-categories border">
      <div>
        <h3 className="text-lg capitalize px-3 py-2 bg-[#F5F5F5] text-gray-600">
          Shop by Categories
        </h3>
        <div className="py-2 px-3">
          {category.map((item, index) => (
            <div className="category-item" key={index}>
              <h4>
                <button
                  className="uppercase text-base py-1 flex justify-between items-center cursor-pointer w-full outline-none"
                  value={item.name}
                  name={"category"}
                  type="button"
                  onClick={(e) => {
                    handleClick(index);
                    updateFilterValue(e);
                  }}
                >
                  <span className="z-[-1]">{item.name}</span>
                  <BsChevronDown
                    className={`${
                      index === activeIndx ? "rotate-180" : "rotate-0"
                    } transition-all duration-300`}
                  />
                </button>
              </h4>
              <ul
                className={`${
                  index === activeIndx ? "max-h-[500px]" : "max-h-0"
                } pl-3 overflow-hidden transition-all duration-500`}
              >
                {item[item.name].map((item, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      name={"subCategory"}
                      value={item.title}
                      className="w-full py-1.5 text-left cursor-pointer hover:text-primary"
                      onClick={(e) => updateFilterValue(e)}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ByCategories;
