import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import type { IconType } from "react-icons";
import { Assets } from "../assets/assets.config";

export type Side = "left" | "right";

export type Page = {
  path: string;
  label: string;
  icon: IconType;
  component: () => React.JSX.Element;
  side: Side;
};

export const Pages: Page[] = [
  {
    path: "/",
    label: "Home",
    component: Home,
    icon: Assets.icons.home,
    side: "left",
  },
  {
    path: "/about",
    label: "About",
    component: About,
    icon: Assets.icons.about,
    side: "left",
  },
  {
    path: "/contact",
    label: "Contact",
    component: Contact,
    icon: Assets.icons.contact,
    side: "right",
  },
];
