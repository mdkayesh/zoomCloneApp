import React from "react";
import ProductStyle1 from "../AdminPanel/ProductStyle1";
import { useRef, useEffect, useState } from "react";
import { UseProductContext } from "../../Context/ProductContext";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import WindowWidth from "../../WindowWidth";
import { motion } from "framer-motion";

const Slider3 = () => {
  const { products } = UseProductContext();
  const [counter, setCounter] = useState(0);
  const trending = products.filter((item) => item.show.includes("trending"));

  const screenWidth = WindowWidth();

  const setLen = () => {
    let len;
    if (screenWidth >= 1280) {
      len = trending.length - 3;
    } else if (screenWidth < 1280 && screenWidth > 768) {
      len = trending.length - 2;
    } else {
      len = trending.length - 1;
    }

    return len;
  };

  const next = () => {
    if (counter < setLen()) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  };

  const prev = () => {
    if (counter <= 0) {
      setCounter(setLen());
    } else {
      setCounter(counter - 1);
    }
  };

  // const width = screenWidth >= 768 ? 50 * counter : 100 * counter;

  const setWidth = () => {
    let width;
    if (screenWidth >= 1280) {
      width = (100 / 3) * counter;
    } else if (screenWidth < 1280 && screenWidth > 768) {
      width = (100 / 2) * counter;
    } else {
      width = 100 * counter;
    }

    return width;
  };

  return (
    <div className="slider overflow-hidden relative">
      <div
        draggable
        onDrag={() => {
          next();
        }}
        className={`inner-slider flex cursor-grabbing transition-all duration-500 `}
        style={{ transform: `translateX(-${setWidth()}%)` }}
      >
        {trending.map((product, index) => (
          <div
            className={`item min-w-[100%] p-3 md:min-w-[50%] xl:min-w-[33.333333%]`}
            key={index}
          >
            <ProductStyle1 {...product} />
          </div>
        ))}
      </div>

      {/* items counter */}
      <div className="flex justify-center">
        <span className="hidden md:block">
          {2 + counter}/{trending.length}
        </span>
        <span className="block md:hidden">
          {1 + counter}/{trending.length}
        </span>
      </div>

      {/* slider buttons */}
      <div className="flex justify-between absolute top-[50%] translate-y-[-50%] w-[100%]">
        <button
          className="prev h-8 w-8 text-lg flex justify-center items-center bg-btn_bg text-btn_text hover:bg-btn_bg_hover hover:text-btn_text_hover"
          onClick={prev}
        >
          <FiArrowLeft />
        </button>
        <button
          className="prev h-8 w-8 text-lg flex justify-center items-center bg-btn_bg text-btn_text hover:bg-btn_bg_hover hover:text-btn_text_hover"
          onClick={next}
        >
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slider3;
