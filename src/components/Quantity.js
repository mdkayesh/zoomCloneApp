import React from "react";

const Quantity = ({ amount, increment, decrement, id }) => {
  return (
    <div className="quantity mt-3">
      {/* <label htmlFor="quantity-number" className="text-gray-500 font-[500]">
        Quantity
      </label> */}
      <div className="flex mt-1">
        <button
          className="h-10 w-10 text-xl flex justify-center items-center border"
          onClick={() => decrement(id)}
        >
          -
        </button>
        <input
          type="number"
          name="number"
          id="quantity-number"
          readOnly
          value={amount}
          className="outline-none border w-16 text-center px-3"
        />
        <button
          className="h-10 w-10 text-xl flex justify-center border items-center"
          onClick={() => increment(id)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Quantity;
