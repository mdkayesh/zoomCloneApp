import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GrFormDown } from "react-icons/gr";
import { BsArrowRight } from "react-icons/bs";
import FilterButtons from "./FilterButtons";
import Availability from "./Availability";
import Price from "./Price";
import Colors from "./Colors";
import Size from "./Size";
import { UseProductContext } from "../../../Context/ProductContext";

const FilterSidebar = ({ isOpen, setIsOpen }) => {
  const { updateFilterValue, sortingProducts } = UseProductContext();
  const [open, setOpen] = useState(null);

  const handleClick = (index) => {
    setOpen(index === open ? null : index);
  };

  document.body.style.overflow = isOpen ? "hidden" : "auto";

  return (
    <>
      <div
        className={`${
          isOpen ? "right-0" : "right-[-100vw]"
        } filter-sidebar fixed top-0 w-[300px] h-full bg-white z-20 border-l transition-all duration-500 lg:hidden`}
      >
        <div className="inner-slidebar px-5 overflow-y-auto overflow-x-hidden">
          <div className="text-center border-b py-3 relative">
            <p className="font-[500]">Filter Products</p>
            <p className="text-xs text-gray-600">Showing 10 of 10 products</p>
            <div
              className="close-button text-xl absolute top-[50%] translate-y-[-50%] right-0 hover:rotate-180 transition-all duration-500 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <AiOutlineClose />
            </div>
          </div>

          {/* main */}
          <div className="relative">
            <div className="main pt-7 pb-3">
              <ul className="mb-3">
                <li
                  className="flex justify-between py-3 text-base cursor-pointer"
                  onClick={() => handleClick(0)}
                >
                  <span>Availability</span>
                  <BsArrowRight />
                </li>
                <li
                  className="flex justify-between py-3 text-base cursor-pointer"
                  onClick={() => handleClick(1)}
                >
                  <span>Price</span>
                  <BsArrowRight />
                </li>
                <li
                  className="flex justify-between py-3 text-base cursor-pointer"
                  onClick={() => handleClick(2)}
                >
                  <span>Color</span>
                  <BsArrowRight />
                </li>
                <li
                  className="flex justify-between py-3 text-base cursor-pointer"
                  onClick={() => handleClick(3)}
                >
                  <span>Size</span>
                  <BsArrowRight />
                </li>
              </ul>
              <div className="sort relative flex gap-4 items-center">
                <label
                  htmlFor="sort-btn"
                  className="font-semibold min-w-[4rem]"
                >
                  Sort By
                </label>
                <select
                  name="sort"
                  id="sort-btn"
                  className="bg-[#FAFAFA] py-3 px-4 outline-none appearance-none cursor-pointer border w-[80%]"
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
                <GrFormDown className="absolute top-[50%] right-2 translate-y-[-50%] text-xl" />
              </div>
              {/* buttons */}
              <FilterButtons setIsOpen={setIsOpen} />
            </div>

            {/* nested */}

            <Availability
              open={open}
              setOpen={setOpen}
              updateFilterValue={updateFilterValue}
            />
            <Price
              open={open}
              setOpen={setOpen}
              updateFilterValue={updateFilterValue}
            />
            <Colors
              open={open}
              setOpen={setOpen}
              updateFilterValue={updateFilterValue}
            />
            <Size
              open={open}
              setOpen={setOpen}
              updateFilterValue={updateFilterValue}
            />
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "opacity-[1] visible" : "invisible opacity-0"
        } fixed top-0 left-0 h-full w-full bg-black/30 transition-all duration-500 z-10`}
        onClick={() => setIsOpen(false)}
      ></div>
    </>
  );
};

export default FilterSidebar;
