import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
import { createElement } from "../../utils/elements";

export const createQuantitySelector = () => {
  // OuterDIV
  const quantitySelector = createElement("div", {
    className: "quantitySelector",
  });
  // MinusButton
  const quantitySelectorDecreaseButton = createElement("button", {});
  //MinusButtonIMG
  const decreaseSVG = createElement("img", {
    src: minus,
    alt: "Minus",
  });
  // PlusButton
  const quantitySelectorIncreaseButton = createElement("button", {});
  // PlusButtonIMG
  const increaseSVG = createElement("img", {
    src: plus,
    alt: "Plus",
  });
  // CounterDIV
  const counterDiv = createElement("div", {
    innerHTML: "1",
  });
  // PositioningOfItems
  quantitySelector.prepend(quantitySelectorDecreaseButton);
  quantitySelectorDecreaseButton.append(decreaseSVG);
  quantitySelector.append(quantitySelectorIncreaseButton);
  quantitySelectorIncreaseButton.append(increaseSVG);
  quantitySelectorDecreaseButton.after(counterDiv);
  // EventListeners
  quantitySelectorDecreaseButton.addEventListener("click", () => {
    const oldResult = Number(counterDiv.innerHTML);
    if (oldResult === 1) {
      quantitySelectorDecreaseButton.disabled = true;
    }
    counterDiv.innerHTML = oldResult - 1;
  });

  quantitySelectorIncreaseButton.addEventListener("click", () => {
    const oldResult = Number(counterDiv.innerHTML);
    if (oldResult === 0) {
      quantitySelectorDecreaseButton.disabled = false;
    }
    counterDiv.innerHTML = oldResult + 1;
  });

  return quantitySelector;
};
