import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";
export function createQuantitySelector() {
  const quantitySelector = document.createElement("div");
  quantitySelector.className = "quantitySelector";

  const quantitySelectorDecreaseButton = document.createElement("button");
  quantitySelector.prepend(quantitySelectorDecreaseButton);

  const decreaseSVG = document.createElement("img");
  decreaseSVG.src = minus;
  decreaseSVG.alt = "Minus";
  quantitySelectorDecreaseButton.append(decreaseSVG);

  const quantitySelectorIncreaseButton = document.createElement("button");
  quantitySelector.append(quantitySelectorIncreaseButton);

  const increaseSVG = document.createElement("img");
  increaseSVG.src = plus;
  increaseSVG.alt = "Plus";
  quantitySelectorIncreaseButton.append(increaseSVG);

  const counterDiv = document.createElement("div");
  counterDiv.innerHTML = "1";
  quantitySelectorDecreaseButton.after(counterDiv);

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
}
