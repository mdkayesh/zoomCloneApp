// import { Card, LineChart, Title } from "@tremor/react";
// import React from "react";

// const ProductTrendChart = () => {
//   const chartdata = [
//     {
//       month: "Jan",
//       "product trends": 2.04,
//     },
//     {
//       month: "Fab",
//       "product trends": 1.96,
//     },
//     {
//       month: "March",
//       "product trends": 1.96,
//     },
//     {
//       month: "April",
//       "product trends": 1.93,
//     },
//     {
//       month: "May",
//       "product trends": 1.88,
//     },
//     //...
//   ];

//   const dataFormatter = (number) =>
//     `${Intl.NumberFormat("us").format(number).toString()}%`;

//   return (
//     <Card>
//       <Title>Product Trends By Month</Title>
//       <LineChart
//         className="mt-6 p-4 min-h-[500px]"
//         data={chartdata}
//         index="year"
//         categories={["product trends"]}
//         colors={["#F53F85"]}
//         valueFormatter={dataFormatter}
//         yAxisWidth={40}
//       />
//     </Card>
//   );
// };

// export default ProductTrendChart;

import { Card, AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "Jan",
    Sales: 40,
  },
  {
    date: "Feb",
    Sales: 80,
  },
  {
    date: "Mar",
    Sales: 100,
  },
  {
    date: "Apr",
    Sales: 200,
  },
  {
    date: "May",
    Sales: 150,
  },
  {
    date: "Jun",
    Sales: 160,
  },
  {
    date: "Jul",
    Sales: 160,
  },
  {
    date: "Aug",
    Sales: 220,
  },
  {
    date: "Seb",
    Sales: 340,
  },
  {
    date: "Oct",
    Sales: 300,
  },
  {
    date: "Nov",
    Sales: 200,
  },
  {
    date: "Dec",
    Sales: 340,
  },
];

const dataFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

const ProductTrendChart = () => {
  return (
    <Card className="p-4">
      <h2 className="text-lg text-bold">Product Trends By Month</h2>
      <AreaChart
        className="h-72 mt-4"
        data={chartdata}
        index="date"
        categories={["Sales"]}
        colors={["indigo"]}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
};

export default ProductTrendChart;
