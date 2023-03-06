import React, { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import WindowWidth from "../../WindowWidth";
import BlogItem from "./BlogItem";

const blogs = [
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0249/6803/6449/articles/1-870x588.jpg?v=1655963077",
    heading: "Lorem ipsum dolor sit amet.",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ullam quasi quis eveniet perspiciatis magni, suscipit amet doloribus quae pariatur!",
    date: "22 Jan",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0249/6803/6449/articles/6-870x588.jpg?v=1655963003",
    heading: "Lorem ipsum dolor sit amet.",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ullam quasi quis eveniet perspiciatis magni, suscipit amet doloribus quae pariatur!",
    date: "22 Jan",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0249/6803/6449/articles/4-870x588.jpg?v=1655963029",
    heading: "Lorem ipsum dolor sit amet.",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ullam quasi quis eveniet perspiciatis magni, suscipit amet doloribus quae pariatur!",
    date: "22 Jan",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0249/6803/6449/articles/7-870x588.jpg?v=1655962969",
    heading: "Lorem ipsum dolor sit amet.",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ullam quasi quis eveniet perspiciatis magni, suscipit amet doloribus quae pariatur!",
    date: "22 Jan",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0249/6803/6449/articles/5-870x588.jpg?v=1655963015",
    heading: "Lorem ipsum dolor sit amet.",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ullam quasi quis eveniet perspiciatis magni, suscipit amet doloribus quae pariatur!",
    date: "22 Jan",
  },
  {
    imgUrl:
      "https://cdn.shopify.com/s/files/1/0249/6803/6449/articles/3-870x588.jpg?v=1655963054",
    heading: "Lorem ipsum dolor sit amet.",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ullam quasi quis eveniet perspiciatis magni, suscipit amet doloribus quae pariatur!",
    date: "22 Jan",
  },
];

const BlogSlider = () => {
  const [counter, setCounter] = useState(2);
  const [className, setClassName] = useState("transition-all duration-500");

  let timeOut, timeOut2;

  const screenWidth = WindowWidth();

  const setWidth = () => {
    let width;
    if (screenWidth >= 768) {
      width = 25 + 50 * counter;
    } else {
      width = 100 * counter;
    }
    return width;
  };

  const next = () => {
    if (counter < blogs.length + 2) {
      setCounter(counter + 1);
    }
  };
  const prev = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const transitionEnd = () => {
    if (counter === blogs.length + 2) {
      setClassName("transition-none");
      setCounter(2);
      timeOut = setTimeout(() => {
        setClassName("transition-all duration-500");
      }, 30);
    }
    if (counter === 0) {
      setClassName("transition-none");
      setCounter(blogs.length);
      timeOut2 = setTimeout(() => {
        setClassName("transition-all duration-500");
      }, 30);
    }
  };

  useEffect(() => {
    transitionEnd();

    return () => {
      clearTimeout(timeOut);
      clearTimeout(timeOut2);
    };
  }, []);

  return (
    <div className="blogSlider overflow-hidden relative">
      <div
        className={`inner-blog flex ${className}`}
        style={{ transform: `translateX(-${setWidth()}%)` }}
        onTransitionEnd={transitionEnd}
        onDrag={(e) => console.log(e.clientX)}
        draggable="true"
      >
        {blogs.map((blog, index) => (
          <div className="item min-w-[100%] md:min-w-[50%]" key={index}>
            <BlogItem {...blog} />
          </div>
        ))}
        {blogs.map((blog, index) => (
          <div className="item min-w-[100%] md:min-w-[50%]" key={index}>
            <BlogItem {...blog} />
          </div>
        ))}
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

export default BlogSlider;
