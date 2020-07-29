import homeButtonSRC from "../../assets/home.svg";
import placeSRC from "../../assets/place.svg";
import coffeeCupSRC from "../../assets/coffeecup.svg";
import profileSRC from "../../assets/profile.svg";
import { createElement } from "../../utils/elements";

export const createMenue = () => {
  const navBar = createElement("nav", {
    className: "fullWidth coffee-nav",
  });

  const homeButtonLink = createElement("a", {
    href: "",
    className: "coffee-nav__button",
  });
  const placeLink = createElement("a", {
    href: "",
    className: "coffee-nav__button",
  });
  const coffeeCupLink = createElement("a", {
    href: "",
    className: "coffee-nav__button",
  });
  const profileLink = createElement("a", {
    href: "",
    className: "coffee-nav__button",
  });

  const homeButton = createElement("img", {
    src: homeButtonSRC,
    alt: "Home Button",
  });
  const place = createElement("img", {
    src: placeSRC,
    alt: "Map",
  });
  const coffeeCup = createElement("img", {
    src: coffeeCupSRC,
    alt: "Coffee order",
  });
  const profile = createElement("img", {
    src: profileSRC,
    alt: "Profile",
  });
  const badge = createElement("span", {
    className: "coffee-nav__badge",
    innerText: 2,
  });

  //Positioning
  navBar.append(homeButtonLink);
  navBar.append(placeLink);
  navBar.append(coffeeCupLink);
  navBar.append(profileLink);
  homeButtonLink.append(homeButton);
  placeLink.append(place);
  coffeeCupLink.append(coffeeCup);
  profileLink.append(profile);
  coffeeCupLink.append(badge);
  return navBar;
};
