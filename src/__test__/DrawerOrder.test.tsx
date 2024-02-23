import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// instance
import axios from "../services/axios";
import {
  data as dataMockOrder,
  message as messageMockOrder,
} from "../__mocks__/order.mock";
import DrawerOrder from "../components/DrawerOrder";
import { OrderProvider } from "../contexts/OrderContext";

jest.mock("../services/axios");

describe("POST sendOrders", () => {
  it("should call the handleSubmit function when the submit button is clicked", async () => {
    render(
      <OrderProvider>
        <DrawerOrder />
      </OrderProvider>
    );

    const submitButton = screen.getByRole("button", { name: /check order/i });
    const mockResponse = { message: messageMockOrder };
    await userEvent.click(submitButton);
    if (dataMockOrder) {
      axios.post = jest.fn().mockResolvedValue(mockResponse);
      await waitFor(() => {
        expect(submitButton).not.toBeDisabled();
        expect(axios.post).toHaveBeenCalledTimes(1);
        const snackbar = screen.queryByDisplayValue(messageMockOrder);
        expect(snackbar).toBe;
      });
    }
  });
});
