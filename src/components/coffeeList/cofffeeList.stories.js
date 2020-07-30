import "./coffeeList.css";
// import coffeeList from "./coffeeList.html";
import { createCoffeeList } from "./coffeeList";

export default { title: "Coffee List" };

export const coffeeList = () => {
  const coffeeListe = createCoffeeList();
  return coffeeListe;

  // export const coffeeListe = () => {
  //     const coffeeListe = createCoffeeList();
  //     return coffeeListe;
};
