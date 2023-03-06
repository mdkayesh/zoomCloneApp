import React, { useState } from "react";
import { CgCheck } from "react-icons/cg";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { UseProductContext } from "../../../Context/ProductContext";

const FilterBy = () => {
  const { colors, sizes, updateFilterValue, clearFilter, filteres } =
    UseProductContext();
  const [colorActive, setColorActive] = useState(null);

  const colorClick = (index) => {
    setColorActive(index === colorActive ? null : index);
  };

  return (
    <div className="filter-by mt-5 border">
      <div>
        <h3 className="text-lg capitalize px-3 py-2 bg-[#F5F5F5] text-gray-600">
          Fiter By
        </h3>
        {filteres.clearFilter && (
          <button
            type="button"
            className="py-2 px-3 bg-btn_bg text-btn_text uppercase my-2 mx-3"
            onClick={clearFilter}
          >
            clear all
          </button>
        )}

        {/* input stock */}
        <div className="px-3 py-2 border-b">
          <h4 className="text-base font-semibold">Availability</h4>
          <li className="flex items-center py-2">
            <label
              htmlFor="inStock"
              className="flex items-center relative cursor-pointer"
            >
              <input
                type="checkbox"
                name="inStock"
                id="inStock"
                className="mr-2 z-[-1] h-4 w-4 invisible [&+_.checkMark]:checked:visible"
              />
              <CgCheck className="checkMark invisible text-primary font-semibold absolute left-0 h-5 w-5 bg-white" />
              <MdCheckBoxOutlineBlank className="h-5 w-5 absolute left-0 text-gray-400" />
              <span>In Stock</span>
            </label>
          </li>
          <li className="flex items-center">
            <label
              htmlFor="outStock"
              className="flex items-center relative cursor-pointer"
            >
              <input
                type="checkbox"
                name="outStock"
                id="outStock"
                className="mr-2 z-[-1] h-4 w-4 invisible [&+_.checkMark]:checked:visible"
              />
              <CgCheck className="checkMark invisible text-primary font-semibold absolute left-0 h-5 w-5 bg-white" />
              <MdCheckBoxOutlineBlank className="h-5 w-5 absolute left-0 text-gray-400" />
              <span>Out Of Stock</span>
            </label>
          </li>
        </div>

        {/* input price */}
        <div className="px-3 py-2 border-b">
          <h4 className="font-bold">Price</h4>
          <div className="flex items-center py-3">
            <div className="flex items-center w-1/2 mr-4 relative">
              <span className="mr-2">$</span>
              <input
                type="number"
                name="fromPrize"
                id="from"
                className="max-w-[50%] outline-none border mr-3 pb-1 pt-3  px-2 focus:border-primary [&+_label]:focus:text-[10px] [&+_label]:focus:top-0 [&+_label]:focus:left-5 text-sm"
                min={0}
                onChange={(e) => updateFilterValue(e)}
              />
              <label
                className="absolute top-2 text-gray-500 capitalize left-7 transition-all duration-300"
                htmlFor="from"
              >
                from
              </label>
            </div>
            <div className="flex items-center w-1/2 relative">
              <span className="mr-2">$</span>
              <input
                type="number"
                name="toPrize"
                id="to"
                className="max-w-[50%] outline-none border mr-3 pb-1 pt-3  px-2 focus:border-primary [&+_label]:focus:text-[10px] [&+_label]:focus:top-0 [&+_label]:focus:left-5 text-sm"
                min={0}
                onChange={(e) => updateFilterValue(e)}
              />
              <label
                className="absolute top-2 text-gray-500 capitalize left-7 transition-all duration-300"
                htmlFor="to"
              >
                to
              </label>
            </div>
          </div>
        </div>

        {/* colors */}
        <div className="px-3 py-2 border-b">
          <h4 className="font-bold">Colors</h4>
          <div className="py-3">
            {colors.map((color, index) => (
              <button
                type="button"
                className={`${
                  index === colorActive
                    ? "shadow-[4px_4px_6px_rgba(0,_0,_0,_0.2)] border-primary -translate-y-1"
                    : ""
                } border h-6 w-6 mr-3 transition-all duration-300`}
                style={{ backgroundColor: color }}
                value={color}
                name={"color"}
                key={index}
                onClick={(e) => {
                  colorClick(index);
                  updateFilterValue(e);
                }}
              ></button>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="px-3 py-2 border-b">
          <h4 className="font-bold">Sizes</h4>
          {sizes.map((size, index) => (
            <li className="flex items-center pt-1" key={index}>
              <label
                htmlFor={size}
                className="flex items-center relative cursor-pointer"
              >
                <input
                  type="checkbox"
                  name={"size"}
                  id={size}
                  value={size}
                  className="mr-2 z-[-1] h-4 w-4 invisible [&+_.checkMark]:checked:visible"
                  onChange={(e) => updateFilterValue(e)}
                />
                <CgCheck className="checkMark invisible text-primary font-semibold absolute left-0 h-5 w-5 bg-white" />
                <MdCheckBoxOutlineBlank className="h-5 w-5 absolute left-0 text-gray-400" />
                <span className="uppercase">{size}</span>
              </label>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBy;
