import React from "react";
import { AreaChart, Card } from "@tremor/react";

const ChartForSales = () => {
  const chartdata = [
    {
      date: "Jan 23",
      Income: 2890,
      Sales: 2338,
    },
    {
      date: "Feb 23",
      Income: 2756,
      Sales: 2103,
    },
    {
      date: "Mar 23",
      Income: 3323,
      Sales: 2194,
    },
    {
      date: "Apr 23",
      Income: 3470,
      Sales: 2108,
    },
    {
      date: "May 23",
      Income: 3475,
      Sales: 1812,
    },
    {
      date: "Jun 23",
      Income: 3129,
      Sales: 1726,
    },
  ];

  const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <div className="bg-white">
      <Card className="p-4">
        <h2 className="text-lg text-bold">Sales By Date</h2>
        <AreaChart
          className="h-72 mt-4"
          data={chartdata}
          index="date"
          categories={["Sales", "Income"]}
          colors={["indigo", "cyan"]}
          valueFormatter={dataFormatter}
        />
      </Card>
    </div>
  );
};

export default ChartForSales;
