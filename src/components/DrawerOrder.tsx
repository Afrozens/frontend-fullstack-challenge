import { useState } from "react";
import { useOrder } from "../hooks/useOrder";
import DrawerOrderTemplate from "./templates/DrawerOrderTemplate";
import { SnackbarUtilities } from "../utils/snackbarSettings";
import { sendOrders } from "../services/order/orderServices";
import Button from "./commons/Button";

const DrawerOrder = () => {
  const { openDrawer, setOpenDrawer, foodCurrent, handleResetOrder } =
    useOrder();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const message = await sendOrders(foodCurrent);
      SnackbarUtilities.toast(message);
      handleResetOrder();
      setOpenDrawer(false);
    } catch (error) {
      SnackbarUtilities.toast(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  const total = foodCurrent.reduce((prev, food) => prev + food.price, 0);
  return (
    <div className="flex ">
      <div
        className={`${
          openDrawer ? "translate-x-0" : "translate-x-72"
        } fixed top-0 right-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-white shadow-lg `}
      >
        <div className="h-screen px-6 py-4 flex flex-col items-center justify-between">
          <div className="w-full flex flex-col justify-end items-end">
            <button
              onClick={() => setOpenDrawer(false)}
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-red-500 self-end rounded-lg hover:bg-red-400 focus:ring-4 focus:outline-none transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="w-full flex justify-between items-center gap-1">
              <h3 className="text-lg text-gray-800 font-extrabold leading-none tracking-tight md:text-lg lg:text-2xl my-2 self-center">
                Orden menu
              </h3>
              <span className="text-2xl font-semibold text-green-500">
                ${total}
              </span>
            </div>
          </div>
          <div className="pr-2 w-full h-[80vh] flex flex-col justify-end">
            <DrawerOrderTemplate orders={foodCurrent} />
          </div>
          <Button
            loading={isLoading}
            onClick={() => foodCurrent.length > 0 && handleSubmit()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 6h.008v.008H6V6Z"
              />
            </svg>
            <span className="flex-grow text-lg ml-2">Check order</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DrawerOrder;
