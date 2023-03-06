import React, { useState } from "react";
import { GrFormDown } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import FilterSidebar from "./FilterSidebar";
import { UseProductContext } from "../../../Context/ProductContext";

const SortBy = ({ handleCol, col }) => {
  const { sortingProducts } = UseProductContext();
  const [open, setOpen] = useState(false);

  return (
    <div className="sort-by bg-[#F5F5F5] py-3 px-4 my-5">
      <div className="flex items-center justify-between">
        <div className="view flex gap-3 items-center">
          <div className="flex items-center gap-3 [&_span]:h-5 [&_span]:w-1 [&_span]:bg-slate-300 [&_span]:block">
            <div
              className={`${
                col === 2 ? "[&_span]:bg-[#6F6F6F]" : ""
              } two flex gap-1 cursor-pointer`}
              onClick={() => handleCol(2)}
            >
              <span></span>
              <span></span>
            </div>
            <div
              className={`${
                col === 3 ? "[&_span]:bg-[#6F6F6F]" : ""
              } three hidden gap-1 cursor-pointer md:flex`}
              onClick={() => handleCol(3)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              className={`${
                col === 4 ? "[&_span]:bg-[#6F6F6F]" : ""
              } four hidden gap-1 cursor-pointer md:flex`}
              onClick={() => handleCol(4)}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div
              className={`${
                col === 1 ? "[&_span]:bg-[#6F6F6F]" : ""
              } three-turn flex gap-1 cursor-pointer rotate-90`}
              onClick={() => handleCol(1)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <p className="hidden sm:block">Showing 5 of 14 products</p>
        </div>
        {/* options */}

        <div className="options hidden gap-3 items-center justify-end relative lg:flex">
          <label htmlFor="sort">Sort by</label>
          <select
            name="sort"
            id="Sort"
            className="bg-[#FAFAFA] py-3 px-4 outline-none appearance-none cursor-pointer border min-w-[200px]"
            onChange={sortingProducts}
          >
            <option value="featured">Featured</option>
            <option value="best-selling">Best Selling</option>
            <option value="a-z">Alphabetically, A-Z</option>
            <option value="z-a">Alphabetically, Z-A</option>
            <option value="low-to-high">Price, Low To High</option>
            <option value="high-to-low">Price, High To Low</option>
            <option value="old-to-new">Date, New To Old</option>
            <option value="new-to-old">Date, Old To New</option>
          </select>
          <GrFormDown className="absolute top-[50%] right-4 translate-y-[-50%] text-xl" />
        </div>

        {/* filter button */}

        <div className="filter-button lg:hidden">
          <button
            type="button"
            className="flex gap-6 items-center text-base transition-all duration-500 py-2 px-4 bg-btn_bg text-btn_text hover:bg-btn_bg_hover hover:text-btn_text_hover uppercase"
            onClick={() => setOpen(!open)}
          >
            <AiOutlineMenu />
            <span>Filter Products</span>
          </button>
        </div>
      </div>
      <FilterSidebar isOpen={open} setIsOpen={setOpen} />
    </div>
  );
};

export default SortBy;
