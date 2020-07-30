import homeButtonSRC from "../../assets/home.svg";
import placeSRC from "../../assets/place.svg";
import coffeeCupSRC from "../../assets/coffeecup.svg";
import profileSRC from "../../assets/profile.svg";
import { createElement } from "../../utils/elements";

export const createMenue = () => {
  const navBar = createElement("nav", {
    className: "fullWidth coffee-nav",
  });

  const menuButtons = [
    { name: "Home", imgSrc: homeButtonSRC },
    { name: "Map", imgSrc: placeSRC },
    { name: "Coffees", imgSrc: coffeeCupSRC },
    { name: "Profile", imgSrc: profileSRC },
  ];

  menuButtons.forEach((button) => {
    const buttonLink = createElement("a", {
      href: "",
      className: "coffee-nav-button",
    });
    const buttonImg = createElement("img", {
      src: button.imgSrc,
      alt: button.name,
    });
    navBar.append(buttonLink);
    buttonLink.append(buttonImg);
  });

  const badge = createElement("span", {
    className: "coffee-nav__badge",
    innerText: 2,
  });
  return navBar;
};
