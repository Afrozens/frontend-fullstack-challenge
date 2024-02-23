import CardDeterminatedPizza from "../CardDeterminatedPizza";
import { Pizza } from "../../models/Pizza";

const OrderTemplate = ({ pizzas }: { pizzas: Pizza[] }) => {
  return (
    <div className="w-full gap-4 grid md:grid-cols-2 lg:grid-cols-3 mb-10">
      {pizzas &&
        pizzas.map((pizza, index) => (
          <CardDeterminatedPizza pizza={pizza} key={index} index={index} />
        ))}
    </div>
  );
};

export default OrderTemplate;
