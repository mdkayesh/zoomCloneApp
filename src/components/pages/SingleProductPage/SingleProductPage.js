import React from "react";
import { UseProductContext } from "../../Context/ProductContext";
import LeftColumn from "./LeftColumn";
import ProductDiscription from "./ProductDiscription";
import RightColumn from "./RightColumn";

const SingleProductPage = () => {
  const { singleProduct } = UseProductContext();
  return singleProduct.map((product) => (
    <section className="single-product container px-6 py-20" key={product.id}>
      <div className="grid gap-5 grid-cols-1 lg:grid-cols-2">
        {/* left-col */}
        <LeftColumn {...product} />
        {/* right column */}
        <RightColumn {...product} />
      </div>
      {/* product discription */}
      <ProductDiscription {...product} />
    </section>
  ));
};

export default SingleProductPage;
