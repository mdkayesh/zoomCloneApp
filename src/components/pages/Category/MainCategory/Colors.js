import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { UseProductContext } from "../../../Context/ProductContext";
import FilterButtons from "./FilterButtons";

const Colors = ({ open, setOpen, updateFilterValue }) => {
  const { colors } = UseProductContext();
  const [colorActive, setColorActive] = useState(null);

  const colorClick = (index) => {
    setColorActive(index === colorActive ? null : index);
  };

  return (
    <div
      className={`${
        open === 2 ? "right-0" : "right-[-100vw]"
      } absolute top-0 transition-all duration-500 w-full pt-8 h-full bg-white`}
    >
      <button className="flex items-center gap-3" onClick={() => setOpen(null)}>
        <BsArrowLeft />
        <span>Colors</span>
      </button>
      <div className="py-3 mt-5 px-4">
        {colors.map((color, index) => (
          <button
            type="button"
            className={`${
              index === colorActive
                ? "shadow-[4px_4px_6px_rgba(0,_0,_0,_0.2)] border-primary -translate-y-1"
                : ""
            } border h-6 w-6 mr-3 transition-all duration-300`}
            style={{ backgroundColor: color }}
            key={index}
            name="color"
            value={color}
            onClick={(e) => {
              colorClick(index);
              updateFilterValue(e);
            }}
          ></button>
        ))}
      </div>
      <FilterButtons />
    </div>
  );
};

export default Colors;
