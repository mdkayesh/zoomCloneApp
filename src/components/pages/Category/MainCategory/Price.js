import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const Price = ({ open, setOpen, updateFilterValue }) => {
  return (
    <div
      className={`${
        open === 1 ? "right-0" : "right-[-100vw]"
      } absolute top-0 transition-all duration-500 w-full pt-8 h-full bg-white`}
    >
      <button className="flex items-center gap-3" onClick={() => setOpen(null)}>
        <BsArrowLeft />
        <span>Price</span>
      </button>
      <p className="text-center mt-3 text-xs">The highest price is $5345.00</p>
      <div className="flex items-center py-3 mt-3">
        <div className="flex items-center w-1/2 relative">
          <span className="mr-2">$</span>
          <input
            type="number"
            name="fromPrize"
            id="from-mobile"
            className="w-[100%] outline-none border mr-3 pb-1 pt-3  px-2 focus:border-primary [&+_label]:focus:text-[10px] [&+_label]:focus:top-0 [&+_label]:focus:left-5 text-sm"
            min={0}
            onChange={updateFilterValue}
          />
          <label
            className="absolute top-2 text-gray-500 capitalize left-7 transition-all duration-300"
            htmlFor="from-mobile"
          >
            from
          </label>
        </div>
        <div className="flex items-center w-1/2 relative">
          <span className="mr-2">$</span>
          <input
            type="number"
            name="toPrize"
            id="to-mobile"
            className="w-[100%] outline-none border mr-3 pb-1 pt-3  px-2 focus:border-primary [&+_label]:focus:text-[10px] [&+_label]:focus:top-0 [&+_label]:focus:left-5 text-sm"
            min={0}
            onChange={updateFilterValue}
          />
          <label
            className="absolute top-2 text-gray-500 capitalize left-7 transition-all duration-300"
            htmlFor="to-mobile"
          >
            to
          </label>
        </div>
      </div>
    </div>
  );
};

export default Price;
