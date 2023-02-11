import { useRouter } from "next/router";
import { NavLink } from "./NavLink";
import { ThemeToggler } from "./ThemeToggler";

type NavLink = {
  label: string;
  path: string;
};

export const NavBar = ({}) => {
  const navLinks: NavLink[] = [
    { label: "home", path: "/home" },
    { label: "contact", path: "/contact" },
  ];
  const { asPath } = useRouter();

  return (
    <nav className="flex h-12 items-center justify-between p-2.5 pt-8 dark:text-gray-300">
      {asPath === "/" ? (
        <div></div>
      ) : (
        <ul className="flex animate-slide-in-right list-none items-center justify-center">
          {navLinks.map((navLink, i) => (
            <NavLink key={i} label={navLink.label} path={navLink.path} />
          ))}
        </ul>
      )}
      <ThemeToggler />
    </nav>
  );
};
