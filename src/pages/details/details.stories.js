// OLDER VERSION
// import { useEffect } from "@storybook/client-api";
// import details from "./details.html";

// export default {
//   title: "Pages/Details",
// };

// export const basic = () => {
//   useEffect(() => {
//     const button = document.querySelector(".btn");
//     button.addEventListener("click", () => {
//       alert(button.innerHTML);
//       button.innerHTML = "Neuer Inhalt";
//     });
//   });

//   return details;
// };

import "./details.css";
import { createButton } from "../../components/button/button";
import { createQuantitySelector } from "../../components/quantitySelector/quantitySelector";
import { createElement } from "../../utils/elements";
import { createSizeSelector } from "../../components/sizeSelector/sizeSelector";
import { createSugarSelector } from "../../components/sugarSelector/sugarSelector";
import macchiato from "../../assets/macciato.svg";

export default { title: "Pages/Details" };

export const basic = () => {
  //Elemente
  const main = createElement("main", {
    className: "details",
  });

  const header = createElement("header", {
    className: "details__header",
  });
  const coffeeTitle = createElement("h2", {
    innerText: "Macchiato",
  });
  const macchiatoImg = createElement("img", {
    src: macchiato,
    alt: "Macchiato",
  });

  const form = createElement("form", {
    className: "details__form",
  });

  const coffeeName = createElement("h3", {
    innerText: "Macchiato",
  });

  const price = createElement("div", {
    innerText: "$2.80",
  });

  const coffeeSize = createElement("label", {
    innerText: "Size",
  });

  const size = createSizeSelector();

  const coffeeSugar = createElement("label", {
    innerText: "Sugar",
  });

  const sugar = createSugarSelector();

  const quantitySelector = createQuantitySelector();

  const button = createButton("Add to cart");

  //Positioning
  header.append(coffeeTitle);
  header.append(macchiatoImg);
  coffeeName.append(price);
  coffeeSize.append(size);
  coffeeSugar.append(sugar);

  main.append(header);

  form.append(coffeeName);
  form.append(quantitySelector);
  form.append(coffeeSize);
  form.append(coffeeSugar);
  form.append(button);

  main.append(form);

  //EventListener
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    for (let [name, value] of formData) {
      console.log(`${name} = ${value}`);
    }
    alert("Formular übertragen, siehe in die Console.");
  });
  return main;
};
