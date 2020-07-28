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

import { createButton } from "../../components/button/button";

export default { title: "Pages/Details" };

export const basic = () => {
  const main = document.createElement("main");

  // const quantitySelector = createQuantitySelector();
  // main.append(quantitySelector)

  const button = createButton("Add to cart");
  main.append(button);
  return main;
};
