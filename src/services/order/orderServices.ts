import { AxiosError } from "axios";
// instance
import axios from "../axios";
// models
import { Order } from "../../models/Order";

export const sendOrders = async (dataOutside: Order[]): Promise<string> => {
  try {
    const { data } = await axios.post("/api/orders", { data: dataOutside });
    return data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message);
    throw `There was an error in create orders: (${err.message})`;
  }
};
