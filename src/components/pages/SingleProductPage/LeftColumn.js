import React, { useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import WindowWidth from "../../WindowWidth";

const LeftColumn = ({ productImages }) => {
  const [counter, setCounter] = useState(0);
  const [imgNum, setImgNum] = useState(0);
  const slideImg = useRef(null);
  const [imgWidth, setImgWidth] = useState(null);

  //   for zoom the img

  const [mousePosiition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.pageX - left) / width;
    const y = (e.pageY - top) / height;
    setMousePosition({ x, y });
  };

  let len =
    WindowWidth() >= 768 ? productImages.length - 4 : productImages.length - 2;

  const width = WindowWidth();

  useEffect(() => {
    setImgWidth(slideImg.current.offsetWidth);
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
    <div className="left-col">
      <div className="img p-3 relative border overflow-hidden">
        <div
          className={`w-full h-full absolute top-0 left-0 bg-no-repeat bg-[length:100%] hover:bg-[length:180%] cursor-crosshair`}
          style={{
            backgroundImage: `url('${productImages[imgNum]}')`,
            backgroundPosition: `${mousePosiition.x * 50}% ${
              mousePosiition.y * 50
            }%`,
          }}
          onMouseMove={handleMouseMove}
        ></div>
        <img
          src={productImages[imgNum]}
          alt="product"
          className="w-full h-full"
        />
      </div>

      {/* imgSlider */}

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

export default LeftColumn;
