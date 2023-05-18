import React from "react";
import { UseProductContext } from "../../../Context/ProductContext";

const FilterButtons = ({ setIsOpen }) => {
  const { clearFilter } = UseProductContext();

  return (
    <div className="flex gap-3 mt-4 border-t pt-5">
      <button
        type="button"
        className="w-1/2 py-2 text-center uppercase text-btn_text_hover bg-btn_bg_hover hover:bg-btn_bg hover:text-btn_text_hover transition-all duration-500"
        onClick={(e) => {
          clearFilter(e);
          setIsOpen(false);
        }}
      >
        Clear
      </button>
      <button
        type="button"
        className="w-1/2 py-2 text-center uppercase text-btn_text bg-btn_bg hover:bg-btn_bg_hover hover:text-btn_text_hover transition-all duration-500"
        onClick={() => setIsOpen(false)}
      >
        Apply
      </button>
    </div>
  );
};

export default FilterButtons;
