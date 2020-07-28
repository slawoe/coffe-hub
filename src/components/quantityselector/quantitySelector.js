export function createQuantitySelector() {
  const div = document.createElement("div");
  div.className = "quantitySelector";

  const quantitySelectorDecreaseButton = document.createElement("button");
  quantitySelectorDecreaseButton.className = "quantitySelectorDecrease";
  div.prepend(quantitySelectorDecreaseButton);

  const decreaseSVG = document.createElement("img");
  decreaseSVG.src = "../../assets/minus.svg";
  quantitySelectorDecreaseButton.append(decreaseSVG);

  const quantitySelectorIncreaseButton = document.createElement("button");
  quantitySelectorIncreaseButton.className = "quantitySelectorIncrease";
  div.append(quantitySelectorIncreaseButton);

  const increaseSVG = document.createElement("img");
  increaseSVG.src = "../../assets/plus.svg";
  quantitySelectorIncreaseButton.append(increaseSVG);

  const counterDiv = document.createElement("div");
  counterDiv.innerHTML = "1";
  quantitySelectorDecreaseButton.after(counterDiv);

  quantitySelectorDecreaseButton.addEventListener("click", () => {
    const oldResult = Number(counterDiv.innerHTML);
    if (oldResult === 2) {
      quantitySelectorDecreaseButton.disabled = true;
    }
    counterDiv.innerHTML = oldResult - 1;
  });

  quantitySelectorIncreaseButton.addEventListener("click", () => {
    const oldResult = Number(counterDiv.innerHTML);
    if (oldResult === 1) {
      quantitySelectorDecreaseButton.disabled = false;
    }
    counterDiv.innerHTML = oldResult + 1;
  });

  return div;
}
