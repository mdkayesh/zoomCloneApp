import { BarChart, Card, Title } from "@tremor/react";
import React from "react";

const MonthlyRevCharts = () => {
  const chartdata = [
    {
      month: "Jan",
      Sales: 40,
    },
    {
      month: "Feb",
      Sales: 80,
    },
    {
      month: "Mar",
      Sales: 100,
    },
    {
      month: "Apr",
      Sales: 200,
    },
    {
      month: "May",
      Sales: 150,
    },
    {
      month: "Jun",
      Sales: 160,
    },
    {
      month: "Jul",
      Sales: 160,
    },
    {
      month: "Aug",
      Sales: 220,
    },
    {
      month: "Seb",
      Sales: 340,
    },
    {
      month: "Oct",
      Sales: 300,
    },
    {
      month: "Nov",
      Sales: 200,
    },
    {
      month: "Dec",
      Sales: 340,
    },
  ];
  const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
  };

  return (
    <Card className="p-4">
      <Title>Monthly Revenue</Title>

      <BarChart
        className="mt-6"
        data={chartdata}
        index="month"
        categories={["Sales"]}
        colors={["blue"]}
        valueFormatter={dataFormatter}
        yAxisWidth={48}
      />
    </Card>
  );
};

export default MonthlyRevCharts;
