import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
// utils
import { SnackbarUtilities } from "../utils/snackbarSettings";
// models
import { Order } from "../models/Order";
interface Props extends PropsWithChildren {}
interface Values {
  order: number;
  openDrawer: boolean;
  foodCurrent: Order[];
  setOrder: Dispatch<SetStateAction<number>>;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  handlePushOrder: (data: Order) => void;
  handleResetOrder: () => void;
}

const OrderContext = createContext({} as Values);

export const OrderProvider = ({ children }: Props) => {
  const [order, setOrder] = useState<number>(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [foodCurrent, setFoodCurrent] = useState<Order[]>([]);
  const handlePushOrder = (data: Order) => {
    setOrder((prev) => prev + 1);
    setFoodCurrent([...foodCurrent, data]);
    SnackbarUtilities.toast("pizza in the order, check cart");
  };

  const handleResetOrder = () => {
    setOrder(0);
    setFoodCurrent([]);
  };

  const values = {
    order,
    foodCurrent,
    openDrawer,
    setOpenDrawer,
    setOrder,
    handlePushOrder,
    handleResetOrder,
  } as Values;
  return (
    <OrderContext.Provider value={values}>{children}</OrderContext.Provider>
  );
};

export default OrderContext;
