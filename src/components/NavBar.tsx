import { Link } from "react-router";
import { Pages } from "../pages/pages.config";
import type { IconType } from "react-icons";
import { Assets } from "../assets/assets.config";

interface NavLinkProps {
  icon: IconType;
  label: string;
}

function NavLink({ icon, label }: NavLinkProps) {
  const IconComponent = icon;
  return (
    <div
      className="group flex items-center gap-2 rounded-lg px-3 py-2 text-white transition-all duration-500 ease-in-out hover:bg-white/10 hover:text-gm-orange active:scale-95 active:text-gm-orange active:duration-150"
      title={label}
    >
      <span className="shrink-0 text-xl transition-transform duration-300 ease-in-out group-hover:scale-110">
        <IconComponent size={24} />
      </span>
      <span className="max-w-0 overflow-hidden font-medium whitespace-nowrap transition-all duration-300 ease-in-out group-hover:max-w-48">
        {label}
      </span>
    </div>
  );
}

export default function NavBar() {
  return (
    <nav className="grid grid-cols-[1fr_auto_1fr] items-center justify-between rounded-4xl bg-gm-blue p-4 text-left text-lg text-white uppercase">
      <div className="justifty-start ml-2 flex items-start space-x-1">
        {Pages.filter((page) => page.side === "left").map((page) => (
          <Link key={page.path} to={page.path}>
            <NavLink icon={page.icon} label={page.label} />
          </Link>
        ))}
      </div>
      <div className="flex h-10 w-auto items-center justify-center">
        <img
          src={Assets.logo.gm.white.path}
          alt={Assets.logo.gm.white.label}
          title={Assets.logo.gm.white.label}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mr-2 flex items-end justify-end space-x-1">
        {Pages.filter((page) => page.side === "right").map((page) => (
          <Link key={page.path} to={page.path}>
            <NavLink icon={page.icon} label={page.label} />
          </Link>
        ))}
        <a
          href="https://linkedin.com/in/gmmastermariner"
          target="_blank"
          title="LinkedIn"
          rel="noopener noreferrer"
        >
          <NavLink icon={Assets.logo.linkedin} label="LinkedIn" />
        </a>
      </div>
    </nav>
  );
}
