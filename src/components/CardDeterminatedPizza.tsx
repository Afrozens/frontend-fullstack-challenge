import { useOrder } from "../hooks/useOrder";
import { Pizza } from "../models/Pizza";
import { randomPizza } from "../utils/randomPizza";
import Button from "./commons/Button";

interface Props {
  pizza: Pizza;
  index: number;
}

const CardDeterminatedPizza = ({ pizza, index }: Props) => {
  const { handlePushOrder } = useOrder();
  return (
    <div
      className={`animate-fade-down animate-delay-[${
        ((index + 1) * 300) / 2
      }ms] w-full rounded-md bg-white shadow-md flex flex-col items-center justify-center px-10 py-4`}
    >
      <img
        src={`/images/${randomPizza()}.svg`}
        alt="pizza image svg"
        className="size-36 md:size-48"
      />
      <h3 className="text-2xl text-gray-800 font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl my-2">
        {pizza.name}
      </h3>
      <div className="font-semibold mb-2 md:my-4 self-start rounded-lg p-1 px-2 bg-secondary text-black text-xs">
        Ingredients:
      </div>
      <ul className=" mb-4 w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index} className="text-xs font-midum capitalize">
            {ingredient}
          </li>
        ))}
      </ul>
      <div className="relative w-fit flex-col flex justify-end flex-grow self-center gap-4 ">
        <Button
          onClick={() => {
            handlePushOrder({ name: pizza.name, price: pizza.price });
          }}
        >
          Order now
        </Button>
        <span className="absolute inline-flex items-center justify-center w-fit p-1 h-6 text-xs font-bold text-white bg-green-500 border-2 border-white rounded-full bottom-8 -end-2">
          ${pizza.price}
        </span>
      </div>
    </div>
  );
};

export default CardDeterminatedPizza;
