import { AxiosError } from "axios";
// instance
import axios from "../axios";
// models
import { Pizza } from "../../models/Pizza";

export const getAllPizzas = async (): Promise<Pizza[]> => {
  try {
    const { data } = await axios.get("/api/pizzas");
    return data.data;
  } catch (error) {
    const err = error as AxiosError;
    console.log(err.message);
    throw `There was an error in obtaining the data of pizzas: (${err.message})`;
  }
};
