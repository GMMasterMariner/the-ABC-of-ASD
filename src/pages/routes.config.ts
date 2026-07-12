import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

import type { IconType } from "react-icons"
import { FaEnvelope, FaHouse, FaPerson } from "react-icons/fa6"

export type Side = "left" | "right"

export type Page = {
    path: string,
    label: string,
    icon: IconType,
    component: () => React.JSX.Element
    side: Side
}

export const Pages: Page[] = [
    {
        path: "/",
        label: "Home",
        component: Home,
        icon: FaHouse,
        side: 'left'
    },
    {
        path: "/about",
        label: "About",
        component: About,
        icon: FaPerson,
        side: "left"
    },
    {
        path: "/contact",
        label: "Contact",
        component: Contact,
        icon: FaEnvelope,
        side: 'right'
    }
]
