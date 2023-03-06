import React from "react";
import { Link } from "react-router-dom";
import { UseProductContext } from "../Context/ProductContext";

export const kids = [
  {
    title: "Kids Shoes",
  },

  {
    title: "Kids Toys",
  },

  {
    title: "Hanky Set",
  },

  {
    title: "Bath Toys",
  },

  {
    title: "Kids Wear",
  },

  {
    title: "Bath Accessories",
  },

  {
    title: "Baba Suits",
  },

  {
    title: "Denim",
  },
];

export const men = [
  {
    title: "T-shirts & Shirts",
  },
  {
    title: "Shoes",
  },
  {
    title: "Watches",
  },
  {
    title: "Blazers & Coats",
  },
  {
    title: "Jackets",
  },
  {
    title: "Sports & Active Wear",
  },
  {
    title: "T Shirts & Tanks",
  },
  {
    title: "Denim",
  },
  {
    title: "Tanks & Jecket",
  },
];

export const women = [
  {
    title: "Shoes",
  },
  {
    title: "Bags & Handbags",
  },
  {
    title: "Dresses",
  },
  {
    title: "Sarees",
  },
  {
    title: "Denim",
  },
  {
    title: "Sweatshirts",
  },
  {
    title: "Coats & Jackets",
  },
  {
    title: "Tops",
  },
  {
    title: "Watches",
  },
];

export const category = [
  {
    name: "kids",
    kids,
    discription: `"Make playtime even more exciting for your little ones with our collection of kids products. From cozy pajamas to fun outdoor toys, we've got everything you need to keep your kids entertained and comfortable. With safety being our top priority, all of our products are made with non-toxic materials and meet the highest quality standards. Your kids will love the bright colors, cute designs, and fun features that make these products a hit. Whether they're snuggling up with a soft blanket or playing with a new action figure, they're sure to have a blast. Shop now and give your kids the gift of joy!"`,
  },
  {
    name: "men",
    men,
    discription: `"Step up your style game with our collection of men's products. From classic polo shirts to stylish leather belts, we've got everything you need to look sharp and feel confident. Our products are designed with comfort and quality in mind, so you can rely on them to last through your daily routine. With a range of sizes, colors, and styles, you're sure to find the perfect item to fit your personal taste. Whether you're dressing up for a special occasion or keeping it casual for a weekend getaway, our men's products have got you covered. Shop now and elevate your wardrobe today!"`,
  },
  {
    name: "women",
    women,
    discription: `"Stay stylish and comfortable with our collection of women's products. From versatile dresses to comfortable leggings, we've got everything you need to create a wardrobe that works for you. Our products are made with high-quality materials and attention to detail, so you can look and feel your best all day long. With a variety of sizes, colors, and styles to choose from, you're sure to find something that fits your unique style. Whether you're dressing up for a special occasion or running errands in comfort, our women's products have got you covered. Shop now and elevate your everyday look."`,
  },
];

const DeskDrop = () => {
  const { updateFilterValue } = UseProductContext();

  return (
    <div className="dropdown absolute w-[85vw] bg-bg_primary top-[55px] left-[50%] border border-gray-200 invisible opacity-0 translate-x-[-50%] transition-all duration-500 mt-10 shadow-md z-20 hidden lg:block">
      <div className="grid grid-cols-5 grid-rows-1 p-5 gap-5">
        {category.map((item, index) => (
          <div key={index}>
            <h4 className="border-b border-gray-200 py-2 text-lg capitalize font-semibold text-heading_color">
              {item.name}
            </h4>
            <ul>
              {item[item.name].map((subItem, index) => (
                <li key={index} className="py-1">
                  <Link
                    to={"category"}
                    className="block w-full h-full text-sm text-text_color hover:text-primary hover:pl-2 hover:font-semibold transition-all duration-300"
                  >
                    <button
                      type="button"
                      value={subItem.title}
                      name={"subCategory"}
                      onClick={updateFilterValue}
                    >
                      {subItem.title}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/b2.png?v=1656069020"
            alt="new arrival"
          />
        </div>
        <div>
          <img
            src="https://cdn.shopify.com/s/files/1/0249/6803/6449/files/b1.png?v=1656069020"
            alt="new arrival"
          />
        </div>
      </div>
    </div>
  );
};

export default DeskDrop;
