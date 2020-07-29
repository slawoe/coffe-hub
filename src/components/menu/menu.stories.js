import "./menu.css";
import { createMenue } from "./menu";

export default { title: "Menu" };

export const navMenue = () => {
  const navMenue = createMenue();
  return navMenue;
};
