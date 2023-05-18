import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { CgCheck } from "react-icons/cg";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { UseProductContext } from "../../../Context/ProductContext";
import FilterButtons from "./FilterButtons";

const Size = ({ open, setOpen, updateFilterValue }) => {
  const { sizes } = UseProductContext();

  return (
    <div
      className={`${
        open === 3 ? "right-0" : "right-[-100vw]"
      } absolute top-0 transition-all duration-500 w-full pt-8 h-full bg-white`}
    >
      <button className="flex items-center gap-3" onClick={() => setOpen(null)}>
        <BsArrowLeft />
        <span>Sizes</span>
      </button>
      <ul className="pl-4 mt-4">
        {sizes.map((size, index) => (
          <li className="flex items-center pt-4 text-lg" key={index}>
            <label
              htmlFor={`${size}-button`}
              className="flex items-center relative cursor-pointer"
            >
              <input
                type="checkbox"
                name={"size"}
                value={size}
                id={`${size}-button`}
                className="mr-2 z-[-1] h-4 w-4 invisible [&+_.checkMark]:checked:visible"
                onChange={(e) => updateFilterValue(e)}
              />
              <CgCheck className="checkMark invisible text-primary font-semibold absolute left-0 h-5 w-5 bg-white" />
              <MdCheckBoxOutlineBlank className="h-5 w-5 absolute left-0 text-gray-400" />
              <span className="uppercase">{size}</span>
            </label>
          </li>
        ))}
      </ul>
      {/* buttons */}
      <FilterButtons />
    </div>
  );
};

export default Size;
