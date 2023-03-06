import React from "react";

const images = [
  "https://cdn.shopify.com/s/files/1/0249/6803/6449/files/Brand-Logo-3_370b1fae-50e5-4541-9603-7a43384dfe56.png?v=1654173078",
  "https://cdn.shopify.com/s/files/1/0249/6803/6449/files/Brand-Logo-1_7ed209cb-779d-42d3-83cd-a3b477f4e646.png?v=1654173078",
  "https://cdn.shopify.com/s/files/1/0249/6803/6449/files/Brand-Logo-4_4a6db6de-e47c-413e-bab6-2ebf9814c683.png?v=1654173078",
  "https://cdn.shopify.com/s/files/1/0249/6803/6449/files/Brand-Logo-5_2b5fe2fd-32e5-49f2-bb04-bf29a8bd0aa3.png?v=1654173078",
  "https://cdn.shopify.com/s/files/1/0249/6803/6449/files/Brand-Logo-2_26da492d-2d8b-4cfa-9dc8-63f3115b39c9.png?v=1654173078",
];

const SliderBrands = () => {
  return (
    <div className="sliderbrands border w-[90%] mx-auto overflow-hidden mb-20">
      <div className="inner-brands flex items-center py-5 animate-[brandLoop_15s_linear_infinite]">
        {images.map((url, index) => (
          <div className="min-w-[20%]" key={index}>
            <img src={url} alt="brands" />
          </div>
        ))}
        {images.map((url, index) => (
          <div className="min-w-[20%]" key={index}>
            <img src={url} alt="brands" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderBrands;
