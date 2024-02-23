export const randomPizza = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  return `pizza-${randomNumber}`;
};
