import "./button.css";

export default { title: "Button" };

function createButton(buttonText) {
  const button = document.createElement("button");
  button.className = "btn";
  const text = document.createTextNode(buttonText);
  button.append(text);
  return button;
}

//good version for multiple addEventListeners
export const addToCart = () => {
  const button = createButton("Add to cart");

  function addEventListenerToButton(button) {
    button.addEventListener("click", () => {
      confirm("Are you sure you don't want more coffee, you cheapskate?");
    });
  }
  addEventListenerToButton(button);

  //newer and better way for single addEventListener

  //   button.addEventListener("click", () => {
  //     confirm("Are you sure you don't want more coffee, you cheapskate?");
  //   });

  return button;
};
