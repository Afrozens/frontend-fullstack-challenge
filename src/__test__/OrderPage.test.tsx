import { screen, render, waitFor } from "@testing-library/react";
// stub - mock
import dataMockPizza from "../__mocks__/pizza.mock";
// instance
import axios from "../services/axios";
// services
// components
import OrderPage from "../pages/OrderPage";
import OrderTemplate from "../components/templates/OrderTemplate";
import { OrderProvider } from "../contexts/OrderContext";

jest.mock("../services/axios");

jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(() => ({ isLoading: false, data: dataMockPizza })),
}));

describe("GET getAllPizzas", () => {
  it("when API call is not succesful", async () => {
    const errAxiosMock = { message: "request failed with status code 404" };

    axios.get = jest.fn().mockRejectedValueOnce(errAxiosMock);
    const snackbar = screen.queryByDisplayValue(errAxiosMock.message);
    expect(snackbar).toBe;
  });

  it("when API call is successful", async () => {
    const mockResponse = {
      data: dataMockPizza,
    };

    axios.get = jest.fn().mockResolvedValue(mockResponse);
    expect(dataMockPizza).toEqual(mockResponse.data);
  });
});

describe("Render OrderPage with data from services", () => {
  it("should render a OrderTemplate component", async () => {
    render(
      <OrderProvider>
        <OrderPage />
      </OrderProvider>
    );

    const h1Heading = screen.getByRole("heading", {
      name: /order now and get discounts up to 50% off/i,
    });

    expect(h1Heading).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText(/is loading/i)).not.toBeInTheDocument();
      expect(<OrderTemplate pizzas={dataMockPizza} key={0} />).toBe;
    });
  });
});
