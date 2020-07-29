import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import { createElement } from "../../utils/elements";

export const createQuantitySelector = () => {
  // OuterDIV
  const quantitySelector = createElement("div", {
    className: "quantitySelector",
  });
  // MinusButton
  const quantitySelectorDecreaseButton = createElement("button", {
    type: "button",
  });
  //MinusButtonIMG
  const decreaseSVG = createElement("img", {
    src: minus,
    alt: "Minus",
  });
  // PlusButton
  const quantitySelectorIncreaseButton = createElement("button", {
    type: "button",
  });
  // PlusButtonIMG
  const increaseSVG = createElement("img", {
    src: plus,
    alt: "Plus",
  });
  // CounterDIV
  const counterDiv = createElement("input", {
    className: "quantitySelector__input",
    type: "number",
    value: 1,
    min: 1,
    max: 9,
    name: "quantity",
  });
  // PositioningOfItems
  quantitySelector.prepend(quantitySelectorDecreaseButton);
  quantitySelectorDecreaseButton.append(decreaseSVG);
  quantitySelector.append(quantitySelectorIncreaseButton);
  quantitySelectorIncreaseButton.append(increaseSVG);
  quantitySelectorDecreaseButton.after(counterDiv);
  // EventListeners
  quantitySelectorDecreaseButton.addEventListener("click", () => {
    const oldResult = Number(counterDiv.value);
    if (oldResult === 1) {
      quantitySelectorDecreaseButton.disabled = true;
    }
    if (oldResult === 9) {
      quantitySelectorIncreaseButton.disabled = false;
    }
    counterDiv.value = oldResult - 1;
  });

  quantitySelectorIncreaseButton.addEventListener("click", () => {
    const oldResult = Number(counterDiv.value);
    if (oldResult === 0) {
      quantitySelectorDecreaseButton.disabled = false;
    }
    if (oldResult === 8) {
      quantitySelectorIncreaseButton.disabled = true;
    }
    counterDiv.value = oldResult + 1;
  });

  return quantitySelector;
};
