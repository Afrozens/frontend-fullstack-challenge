import { useQuery } from "@tanstack/react-query";
import DrawerOrder from "../components/DrawerOrder";
import { getAllPizzas } from "../services/pizzas/pizzasServices";
import OrderTemplate from "../components/templates/OrderTemplate";
import { Pizza } from "../models/Pizza";

const OrderPage = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["pizzas"],
    queryFn: async () => await getAllPizzas(),
  });
  return (
    <>
      <section className="w-full min-h-screen bg-primary">
        <article className="w-full">
          <div className="flex flex-col md:flex-row md:py-10 items-center justify-center bg-gray-700 w-full px-8 py-2">
            <img
              src="/images/pizza-2.svg"
              alt="pizza images svg"
              className="object-cover size-36 md:size-48 animate-spin-slow transition-all"
            />
            <h1 className="text-center md:text-start animate-fade-up animate-ease-in-out ">
              Order now and get discounts up to{" "}
              <b className="text-secondary">50% </b>off
            </h1>
          </div>
          <hr className="animate-fade w-48 h-1 mx-auto my-4 bg-secondary border-0 rounded md:my-10" />
        </article>
        <article className="px-12 flex flex-col gap-4">
          <h2 className="text-center  mb-3">
            Choose the one of your preference
          </h2>
          {isLoading ? (
            "is loading"
          ) : (
            <OrderTemplate pizzas={data as Pizza[]} />
          )}
        </article>
      </section>
      <DrawerOrder />
    </>
  );
};

export default OrderPage;
