import { useEffect } from "@storybook/client-api";
import "./quantitySelector.css";
import quantitySelector from "./quantitySelector.html";

export default { title: "Quantity Selector" };

export const coffeeSelector = () => {
  useEffect(() => {
    const decrease = document.querySelector(
      ".quantitySelector>button:first-child"
    );
    const increase = document.querySelector(
      ".quantitySelector>button:last-child"
    );
    const result = document.querySelector(".quantitySelector>div");

    decrease.addEventListener("click", () => {
      const oldResult = Number(result.innerHTML);
      if (oldResult === 2) {
        decrease.disabled = true;
      }
      result.innerHTML = oldResult - 1;
    });

    increase.addEventListener("click", () => {
      const oldResult = Number(result.innerHTML);
      if (oldResult === 1) {
        decrease.disabled = false;
      }
      result.innerHTML = oldResult + 1;
    });
  });
  return quantitySelector;
};
