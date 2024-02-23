import { Order } from "../../models/Order";
import { randomPizza } from "../../utils/randomPizza";

interface Props {
  orders: Order[];
}

const DrawerOrderTemplate = ({ orders }: Props) => {
  return (
    <div className="overflow-y-auto">
      {orders.length > 0 &&
        orders.map((order, index) => (
          <div
            key={index}
            className={`mb-4 bg-primary rounded-lg shadow-md flex justify-between items-center animate-fade-up animate-delay-[${
              ((index + 1) * 100) / 2
            }ms]`}
          >
            <img
              src={`/images/${randomPizza()}.svg`}
              alt="pizza image svg"
              className="size-12 md:size-16"
            />
            <div className="w-full flex-grow flex-col flex items-center justify-start">
              <span className="text-xl font-semibold capitalize">
                {order.name}
              </span>
              <span className="text-lg font-medium text-green-500 ">
                ${order.price}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default DrawerOrderTemplate;
