import { Order } from "../models/Order";

const data: Order[] = [
  {
    name: "pizza",
    price: 2,
  },
];

const summaryMockData = data.map((order) => order.name);

const message = `Your order is confirmed. Order summary: \n ${summaryMockData.join(
  ", "
)}`;

export { message, data };
