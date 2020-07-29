import "./sugarSelector.css";
import { createElement } from "../../utils/elements";
import noSugarSrc from "../../assets/nosugar.svg";
import sugarSrc from "../../assets/sugar.svg";
import maxSugarSrc from "../../assets/maxsugar.svg";

export const createSugarSelector = () => {
  const sugarSelector = createElement("div", {
    className: "sugar",
  });

  const noSugar = createElement("input", {
    type: "radio",
    name: "sugar",
    value: "No sugar",
  });
  const sugar = createElement("input", {
    type: "radio",
    name: "sugar",
    value: "Sugar",
  });
  const moreSugar = createElement("input", {
    type: "radio",
    name: "sugar",
    value: "More Sugar",
  });
  const maxSugar = createElement("input", {
    type: "radio",
    name: "sugar",
    value: "Max Sugar",
  });

  const noSugarLabel = createElement("label");
  const noSugarText = createElement("span", {
    innerText: "No sugar",
  });

  // const noSugarImg = createElement("img", {
  //   src: noSugarSrc,
  //   alt: "No Sugar",
  // });

  const sugarLabel = createElement("label");
  const sugarText = createElement("span", {
    innerText: "Sugar",
  });

  // const sugarImg = createElement("img", {
  //   src: sugarSrc,
  //   alt: "Sugar",
  // });

  const moreSugarLabel = createElement("label");
  const moreSugarText = createElement("span", {
    innerText: "More sugar",
  });

  // const moreSugarImages = createElement("div");
  // const moreSugarImg = createElement("img", {
  //   src: sugarSrc,
  //   alt: "More Sugar",
  // });
  // const moreSugarImg2 = createElement("img", {
  //   src: sugarSrc,
  //   alt: "More Sugar",
  // });

  const maxSugarLabel = createElement("label");
  const maxSugarText = createElement("span", {
    innerText: "Max sugar",
  });

  // const maxSugarImg = createElement("img", {
  //   src: maxSugarSrc,
  //   alt: "Max Sugar",
  // });

  //Positioning

  noSugarLabel.prepend(noSugar);
  noSugarLabel.append(noSugarText);
  sugarSelector.append(noSugarLabel);

  sugarLabel.prepend(sugar);
  sugarLabel.append(sugarText);
  sugarSelector.append(sugarLabel);

  moreSugarLabel.prepend(moreSugar);
  moreSugarLabel.append(moreSugarText);
  sugarSelector.append(moreSugarLabel);

  maxSugarLabel.prepend(maxSugar);
  maxSugarLabel.append(maxSugarText);
  sugarSelector.append(maxSugarLabel);

  // noSugarLabel.append(noSugar);
  // noSugarLabel.prepend(noSugarImg);
  // sugarSelector.append(noSugarLabel);

  // sugarLabel.append(sugar);
  // sugarLabel.prepend(sugarImg);
  // sugarSelector.append(sugarLabel);

  // moreSugarLabel.append(moreSugar);
  // moreSugarLabel.prepend(moreSugarImages);
  // moreSugarImages.append(moreSugarImg);
  // moreSugarImages.append(moreSugarImg2);
  // sugarSelector.append(moreSugarLabel);

  // maxSugarLabel.append(maxSugar);
  // maxSugarLabel.prepend(maxSugarImg);
  // sugarSelector.append(maxSugarLabel);

  return sugarSelector;
};
