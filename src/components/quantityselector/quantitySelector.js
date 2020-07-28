export function createQuantitySelector() {
  const div = document.createElement("div");
  div.className = "quantitySelector";

  const quantitySelectorDecreaseButton = document.createElement("button");
  // quantitySelectorDecreaseButton.className = "quantitySelectorDecrease";
  quantitySelectorDecreaseButton.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="11" height="2" viewBox="0 0 11 2"><defs><style>.a{fill:#fff;}</style></defs><rect class="a" width="11" height="2" rx="1"/></svg>';
  div.prepend(quantitySelectorDecreaseButton);

  //   const decreaseSVG = document.createElement("img");
  //   decreaseSVG.src = "../../assets/minus.svg";
  //   quantitySelectorDecreaseButton.append(decreaseSVG);

  const quantitySelectorIncreaseButton = document.createElement("button");
  // quantitySelectorIncreaseButton.className = "quantitySelectorIncrease";
  quantitySelectorIncreaseButton.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="10.763" height="10.762" viewBox="0 0 10.763 10.762"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M4.651,9.994V6.112H.769a.769.769,0,0,1,0-1.538H4.651V.769a.769.769,0,1,1,1.537,0V4.574H9.995a.769.769,0,0,1,0,1.538H6.188V9.994a.769.769,0,1,1-1.537,0Z"/></svg>';
  div.append(quantitySelectorIncreaseButton);

  //   const increaseSVG = document.createElement("img");
  //   increaseSVG.src = "../../assets/plus.svg";
  //   quantitySelectorIncreaseButton.append(increaseSVG);

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

  return div;
}
