import React, { useState } from "react";
import CategoryProducts from "./CategoryProducts";
import SortBy from "./SortBy";
import { category } from "../../../Header/DeskDrop";

const Main = ({ activeIndx }) => {
  const [col, setCol] = useState(2);

  const handleCol = (num) => {
    setCol(num);
  };

  return (
    <section className="category-main">
      <div className="inner-main">
        {category.map((item, index) =>
          index === activeIndx ? (
            <div className="content pb-5" key={index}>
              <h1 className="text-3xl mb-3 font-bold capitalize">
                {item.name}
              </h1>
              <p className="mb-4 text-gray-500 leading-[1.8]">
                {item.discription.slice(0, 200)}
              </p>
              <p className="text-gray-500 leading-[1.8]">
                {item.discription.slice(50)}
              </p>
            </div>
          ) : null
        )}

        {activeIndx === null && (
          <div className="content pb-5">
            <h1 className="text-3xl mb-3 font-bold capitalize">
              Luxarious Fashion World
            </h1>
            <p className="mb-4 text-gray-500 leading-[1.8]">
              "Discover the latest fashion must-haves for men, women, and kids
              in our collection of stylish and practical products. From trendy
              clothing to versatile accessories, we have everything you need to
              elevate your everyday look.
            </p>
            <p className="mb-4 text-gray-500 leading-[1.8]">
              Made with high-quality materials and attention to detail, our
              products are designed to provide both comfort and style. With a
              range of sizes, colors, and styles to choose from, you're sure to
              find something that fits your personal taste. Shop now and enjoy
              the ultimate shopping experience!"
            </p>
          </div>
        )}

        <div className="add mt-5">
          <img
            src="https://cdn.shopify.com/s/files/1/0249/6803/6449/collections/Untitled-1_ac6bb1bf-3554-4807-8fd0-b3056d8fd5dd.jpg?v=1666265745"
            alt="add"
          />
        </div>
        {/* sort by */}

        <SortBy handleCol={handleCol} col={col} />

        {/* category products */}

        <CategoryProducts col={col} />
      </div>
    </section>
  );
};

export default Main;
