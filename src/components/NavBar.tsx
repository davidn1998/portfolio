import { NavLink } from "./NavLink";
import { ThemeToggler } from "./ThemeToggler";

type NavLink = {
  label: string;
  path: string;
};

export const NavBar = ({}) => {
  const navLinks: NavLink[] = [
    { label: "home", path: "/" },
    { label: "contact", path: "/contact" },
  ];

  return (
    <nav className="bg-primary mt-4 flex h-12 items-center justify-between p-2.5 dark:text-gray-300">
      <ul className="flex animate-slide-in-right list-none items-center justify-center">
        {navLinks.map((navLink, i) => (
          <NavLink key={i} label={navLink.label} path={navLink.path} />
        ))}
      </ul>
      <ThemeToggler />
    </nav>
  );
};
