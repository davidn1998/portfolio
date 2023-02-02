import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className="m-4 cursor-pointer rounded-xl border-2 border-transparent bg-gray-200 p-2 text-lg transition-all duration-100 ease-linear hover:border-gray-400 dark:bg-gray-700"
    >
      {theme === "dark" ? <BsSunFill /> : <BsMoonFill />}
    </button>
  );
};
