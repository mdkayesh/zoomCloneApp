import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { CgCheck } from "react-icons/cg";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import FilterButtons from "./FilterButtons";

const Availability = ({ open, setOpen }) => {
  return (
    <div
      className={`${
        open === 0 ? "right-0" : "right-[-100vw]"
      } absolute top-0 transition-all duration-500 w-full pt-8 h-full bg-white`}
    >
      <button className="flex items-center gap-3" onClick={() => setOpen(null)}>
        <BsArrowLeft />
        <span>Availability</span>
      </button>
      <ul className="pl-5 mt-2">
        <li className="flex items-center py-2 pb-4">
          <label
            htmlFor="mobile-stock"
            className="flex items-center relative cursor-pointer"
          >
            <input
              type="checkbox"
              name="mobile-stock"
              id="mobile-stock"
              className="mr-2 z-[-1] h-4 w-4 invisible [&+_.checkMark]:checked:visible"
            />
            <CgCheck className="checkMark invisible text-primary font-semibold absolute left-0 h-5 w-5 bg-white" />
            <MdCheckBoxOutlineBlank className="h-5 w-5 absolute left-0 text-gray-400" />
            <span>In Stock</span>
          </label>
        </li>
        <li className="flex items-center">
          <label
            htmlFor="mobile-outStock"
            className="flex items-center relative cursor-pointer"
          >
            <input
              type="checkbox"
              name="mobile-outStock"
              id="mobile-outStock"
              className="mr-2 z-[-1] h-4 w-4 invisible [&+_.checkMark]:checked:visible"
            />
            <CgCheck className="checkMark invisible text-primary font-semibold absolute left-0 h-5 w-5 bg-white" />
            <MdCheckBoxOutlineBlank className="h-5 w-5 absolute left-0 text-gray-400" />
            <span>Out Of Stock</span>
          </label>
        </li>
      </ul>
      <FilterButtons />
    </div>
  );
};

export default Availability;
