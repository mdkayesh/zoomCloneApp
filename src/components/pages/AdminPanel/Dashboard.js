import React from "react";
import { AiOutlineArrowUp, AiOutlineDollarCircle } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BsPersonCircle } from "react-icons/bs";
import { GrDeliver } from "react-icons/gr";
import ChartForSales from "../../Context/AreaChart";
import ProductTrendChart from "./ProductTrendChart";
import MonthlyRevCharts from "./MonthlyRevCharts";

const Dashboard = () => {
  return (
    <div className="px-4 py-24 w-full lg:ml-[20%] lg:w-[80%] bg-[#EEEEF8]">
      <h1 className="py-4 text-2xl font-semibold">Dashboard</h1>
      <hr className="border-gray-400" />

      {/* total */}
      <div className="grid grid-cols-1 gap-y-10">
        <div className="grid gap-5 mt-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center p-4 bg-[#FFFFFF] gap-3 rounded-md">
            <div className="text-center">
              <h3 className="text-lg font-bold">Total Revenue</h3>
              <p>(Last Month)</p>
            </div>

            <div className="rounded-full p-2 bg-[#E5F9F6] text-lg text-primary">
              <AiOutlineDollarCircle />
            </div>
            <p className="text-lg font-[500]">$20,000</p>
            <div className="bg-[#E5F9F6] rounded-md px-3 py-2 w-full flex justify-center">
              <p className="flex gap-1 items-center text-sm text-[#00C9A7]">
                <AiOutlineArrowUp /> Revenue up
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 bg-[#FFFFFF] gap-3 rounded-md">
            <div className="text-center">
              <h3 className="text-lg font-bold">Total Orders</h3>
              <p>(Last Month)</p>
            </div>

            <div className="rounded-full p-2 bg-[#EBF3FE] text-lg text-[#6762FF]">
              <HiOutlineShoppingCart />
            </div>
            <p className="text-lg font-[500]">69,252</p>
            <div className="bg-[#E5F9F6] rounded-md px-3 py-2 w-full flex justify-center">
              <p className="flex gap-1 items-center text-sm text-[#00C9A7]">
                <AiOutlineArrowUp /> Order up
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 bg-[#FFFFFF] gap-3 rounded-md">
            <div className="text-center">
              <h3 className="text-lg font-bold">New Customers</h3>
              <p>(Last Month)</p>
            </div>

            <div className="rounded-full p-2 bg-[#F3F0FF] text-lg text-[#886CFF]">
              <BsPersonCircle />
            </div>
            <p className="text-lg font-[500]">10,332</p>
            <div className="bg-[#E5F9F6] rounded-md px-3 py-2 w-full flex justify-center">
              <p className="flex gap-1 items-center text-sm text-[#00C9A7]">
                <AiOutlineArrowUp /> Customer up
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 bg-[#FFFFFF] gap-3 rounded-md">
            <div className="text-center">
              <h3 className="text-lg font-bold">Total Delivery</h3>
              <p>(Last Month)</p>
            </div>

            <div className="rounded-full p-2 bg-[#E5F9F6] text-lg">
              <GrDeliver />
            </div>
            <p className="text-lg font-[500]">30,232</p>
            <div className="bg-[#FFDEE3] rounded-md px-3 py-2 w-full flex justify-center">
              <p className="flex gap-1 items-center text-sm text-[#FF5C75]">
                <AiOutlineArrowUp /> Delivery down
              </p>
            </div>
          </div>
        </div>

        {/* charts */}

        <ChartForSales />
        <ProductTrendChart />
        <MonthlyRevCharts />
      </div>
    </div>
  );
};

export default Dashboard;
