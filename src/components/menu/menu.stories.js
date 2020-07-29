import "./menu.css";
import { createMenue } from "./menu";

export default { title: "Menu" };

export const navMenue = () => {
  const navMenue = createMenue();
  return navMenue;
};

// import "./menu.css";
// import menu from "./menu.html";

// export default { title: "menu" };

// export const menue = () => menu;
