import React from "react";

const Orders = () => {
  const customer = [
    {
      name: "Akash",
      id: "kdahfisahfihdkh",
      date: "21 Fab 2023",
      address: "Narayanganj, Dhaka, Bangladesh",
      Amount: 150,
      paymentMethod: "Stripe",
      contact: "+8801734909372",
      status: "pending",
    },
  ];

  return (
    <div className="px-4 py-24 w-full lg:ml-[20%] lg:w-[80%]">
      <div className="overflow-auto">
        <table className="w-full text-xs [&_th]:px-2 [&_th]:py-4 [&_th]:whitespace-nowrap [&_td]:p-3  shadow-lg border">
          <thead className="border-b bg-primary text-[#e6e6e6]">
            <tr>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Delivery Address</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Contact</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {customer.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.name}
                  <p className="mt-2">
                    <strong>id:</strong>
                    {item.id}
                  </p>
                </td>
                <td>{item.date}</td>
                <td>{item.address}</td>
                <td>{item.Amount}</td>
                <td>{item.paymentMethod}</td>
                <td>{item.contact}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
