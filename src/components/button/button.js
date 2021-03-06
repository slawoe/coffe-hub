export function createButton(buttonText) {
  const button = document.createElement("button");
  button.className = "btn";
  const text = document.createTextNode(buttonText);
  button.append(text);

  // button.addEventListener("click", () => {
  //   const answer = confirm(
  //     "Are you sure you don't want more coffee, you cheapskate?"
  //   );
  //   if (answer === true) {
  //     alert("Scrooge! Don't you have any friends you can buy coffee for?");
  //   } else {
  //     alert("Good boy! Add more coffee! Buy it all!");
  //   }
  // });

  return button;
}
//good version for multiple addEventListeners

//   function addEventListenerToButton(button) {
//     button.addEventListener("click", () => {
//       const answer = confirm(
//         "Are you sure you don't want more coffee, you cheapskate?"
//       );
//       if (answer === true) {
//         alert("Scrooge! Don't you have any friends you can buy coffee for?");
//       } else {
//         alert("Good boy! Add more coffee! Buy it all!");
//       }
//     });
//   }
//   addEventListenerToButton(button);

//newer and better way for single addEventListener

//   button.addEventListener("click", () => {
//     const answer = confirm(
//       "Are you sure you don't want more coffee, you cheapskate?"
//     );
//     if (answer === true) {
//       alert("Scrooge! Don't you have any friends you can buy coffee for?");
//     } else {
//       alert("Good boy! Add more coffee! Buy it all!");
//     }
//   });
