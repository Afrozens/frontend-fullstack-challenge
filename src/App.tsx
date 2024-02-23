import Header from "./components/Header";
import { OrderProvider } from "./contexts/OrderContext";
import OrderPage from "./pages/OrderPage";

const App = () => {
  return (
    <OrderProvider>
      <Header />
      <OrderPage />
    </OrderProvider>
  );
};

export default App;
