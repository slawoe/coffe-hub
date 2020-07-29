import rightArrow from "../../assets/back.svg";
import espresso from "../../assets/Espresso.svg";
import cappucino from "../../assets/Cappuccino.svg";
import macchiato from "../../assets/macciato.svg";
import mocha from "../../assets/Mocha.svg";
import latte from "../../assets/latte.svg";
import { createElement } from "../../utils/elements";

export const createCoffeeList = () => {
  // OuterDIV
  const coffeeListDiv = createElement("div", {
    className: "fullWidth",
  });

  // List
  const coffeList = createElement("ul", {
    className: "list",
  });
};
