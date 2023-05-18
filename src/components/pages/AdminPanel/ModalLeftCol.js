import React, { useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import WindowWidth from "../../WindowWidth";

const ModalLeftCol = ({ productImages, hoverImg, openModal }) => {
  const [counter, setCounter] = useState(0);
  const [imgNum, setImgNum] = useState(0);
  const slideImg = useRef(null);
  const [imgWidth, setImgWidth] = useState(null);

  let len =
    WindowWidth() >= 768 ? productImages.length - 4 : productImages.length - 2;

  const width = WindowWidth();

  useEffect(() => {
    setImgWidth(slideImg.current.offsetWidth);

    return () => null;
  }, [width]);

  const slideChange = (n) => {
    setCounter((prev) => prev + n);
    if (n === -1) {
      if (counter <= 0) {
        setCounter(len);
      }
    } else {
      if (counter >= len) {
        setCounter(0);
      }
    }
  };

  return (
    <div className="left-col px-3">
      <Link to={"/single-product"} onClick={openModal}>
        <div className="img relative pb-[120%] [&_.hoverImg]:hover:opacity-100 [&_.mainImg]:hover:opacity-0">
          <img
            src={productImages[imgNum]}
            alt="product"
            className="mainImg absolute opacity-100 top-0 left-0 w-full h-full transition-all duration-300 object-cover"
          />
          <img
            src={hoverImg}
            alt="product"
            className="hoverImg absolute opacity-0 top-0 left-0 w-full h-full transition-all duration-300 object-cover"
          />
        </div>
      </Link>

      <div className="slider mt-5 relative overflow-hidden">
        <div
          className="inner-slider flex transition-all duration-500"
          style={{ transform: `translateX(${-imgWidth * counter}px)` }}
        >
          {productImages.map((img, index) => (
            <div
              className="min-w-[50%] px-2 lg:min-w-[25%]"
              ref={slideImg}
              key={index}
            >
              <div className="img border relative pb-[100%]">
                <img
                  src={img}
                  alt="product"
                  className="w-full h-full object-cover p-2 absolute top-0 left-0 cursor-pointer"
                  onClick={() => setImgNum(index)}
                />
              </div>
            </div>
          ))}
        </div>
        {/* slider buttons */}

        <button
          type="button"
          className="h-6 w-6 absolute flex items-center justify-center bg-btn_bg text-btn_text top-[50%] translate-y-[-50%] hover:text-btn_text_hover hover:bg-btn_bg_hover transition-all duration-500 z-10"
          onClick={() => slideChange(-1)}
        >
          <AiOutlineLeft />
        </button>
        <button
          type="button"
          className="h-6 w-6 absolute right-0 flex items-center justify-center bg-btn_bg text-btn_text top-[50%] translate-y-[-50%] hover:text-btn_text_hover hover:bg-btn_bg_hover transition-all duration-500 z-10"
          onClick={() => slideChange(1)}
        >
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default ModalLeftCol;
