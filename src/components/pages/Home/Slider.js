import React, { useState, useEffect } from "react";

const Slider = () => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);

  useEffect(() => {
    setSliderWidth(document.querySelector(".slider").clientWidth);
  }, []);

  const handleLeftButton = () => {
    setSliderPosition(sliderPosition + sliderWidth);
  };

  const handleRightButton = () => {
    setSliderPosition(sliderPosition - sliderWidth);
  };

  const handleSliderGrab = (e) => {
    const slider = document.querySelector(".slider");
    let isDragging = true;
    let currentX;
    let initialX;
    let xOffset = 0;

    const handleMouseUp = () => {
      isDragging = false;
      slider.style.cursor = "grab";
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      initialX = e.clientX - xOffset;
      slider.style.cursor = "grabbing";
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        e.preventDefault();
        currentX = e.clientX - xOffset;
        setSliderPosition(currentX - initialX);
      }
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);
  };

  return (
    <div className="slider-container overflow-hidden">
      <button className="left-button" onClick={handleLeftButton}>
        &lt;
      </button>
      <div
        className="slider flex"
        onMouseDown={handleSliderGrab}
        style={{
          transform: `translateX(${sliderPosition}px)`,
        }}
      >
        <div className="slide min-w-[33.33333%] bg-white border py-5">
          Slide 1
        </div>
        <div className="slide min-w-[33.33333%] bg-white border py-5">
          Slide 2
        </div>
        <div className="slide min-w-[33.33333%] bg-white border py-5">
          Slide 3
        </div>
        <div className="slide min-w-[33.33333%] bg-white border py-5">
          Slide 4
        </div>
        <div className="slide min-w-[33.33333%] bg-white border py-5">
          Slide 5
        </div>
        <div className="slide min-w-[33.33333%] bg-white border py-5">
          Slide 6
        </div>
      </div>
      <button className="right-button" onClick={handleRightButton}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;
