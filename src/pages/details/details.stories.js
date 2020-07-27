import { useEffect } from "@storybook/client-api";
import details from "./details.html";

export default {
  title: "Pages/Details",
};

export const basic = () => {
  useEffect(() => {
    const button = document.querySelector(".btn");
    button.addEventListener("click", () => {
      alert(button.innerHTML);
      button.innerHTML = "Neuer Inhalt";
    });
  });

  return details;
};

// /*Calls internal alert function*/
// //oneline comment

// // Variable mit String
// let message = "Hello Fishy";
// // nicht nochmal let schreiben, da es schon eine Variante gibt
// message = "Fish Ahoi";
// // Aufruf

// // alert("Hallo");
// // alert("World");

// // static var
// const PI = 3.141592;

// // keine Sonderzeichen etc, CamelCase
// const bootcampStudent = "Slawo";

// Zahlen
// const numberOfStudents = 15;

// //weitere Variable
// const message = `Hello ${numberOfStudents} fishes`;
// alert(message);
