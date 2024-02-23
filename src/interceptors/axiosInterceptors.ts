// instance of axios
import { AxiosError } from "axios";
import axios from "../services/axios";
import { SnackbarUtilities } from "../utils/snackbarSettings";

export const AxiosInterceptor = () => {
  axios.interceptors.response.use(
    (response) => {
      console.log("response", response);
      return response;
    },
    (error) => {
      const err = error as AxiosError;
      console.log(error);
      SnackbarUtilities.error(err.message);
      return Promise.reject(err);
    }
  );
};
