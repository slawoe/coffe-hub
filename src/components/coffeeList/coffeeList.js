import "./coffeeList.css";
import rightArrow from "../../assets/back.svg";
import espresso from "../../assets/Espresso.svg";
import cappucino from "../../assets/Cappuccino.svg";
import macchiato from "../../assets/macciato.svg";
import mocha from "../../assets/Mocha.svg";
import latte from "../../assets/latte.svg";
import { createElement } from "../../utils/elements";

// Andere Schreibweise für die folgende const Funktion
// export function createCoffeeList () {}

export const createCoffeeList = () => {
  const listDiv = createElement("div", {
    className: "fullWidth",
  });

  const coffees = [
    { name: "Espresso", imgSrc: espresso },
    { name: "Cappucino", imgSrc: cappucino },
    { name: "Macchiato", imgSrc: macchiato },
    { name: "Mocha", imgSrc: mocha },
    { name: "Latte", imgSrc: latte },
  ];

  const list = createElement("ul", {
    className: "list",
  });

  coffees.forEach((coffee) => {
    const listItem = createElement("li");
    const coffeeImg = createElement("img", {
      src: coffee.imgSrc,
      alt: coffee.name,
    });
    const spanElement = createElement("span", {
      innerText: coffee.name,
    });
    const arrowImg = createElement("img", {
      src: rightArrow,
      alt: "weiter",
    });

    list.append(listItem);
    listItem.append(coffeeImg);
    listItem.append(spanElement);
    listItem.append(arrowImg);
  });

  listDiv.append(list);
  return listDiv;
};
