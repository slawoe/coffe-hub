import "./coffeeList.css";
import coffeeList from "./coffeeList.html";
import { createCoffeeList } from "./coffeeList";

export default { title: "Coffee List" };

export const coffeeListe = () => coffeeList;

// export const coffeeListe = () => {
//     const coffeeListe = createCoffeeList();
//     return coffeeListe;
// };
