import Link from "next/link";
import { useEffect } from "react";
import Typed from "typed.js";

const SplashScreen = () => {
  useEffect(() => {
    const typed = new Typed("#typeView", {
      strings: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next JS",
        "Tailwind CSS",
        "Python",
        "Mongo DB",
        "Git",
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-1 flex-col items-center justify-around">
      <div className="text-center text-6xl">
        <h1 className="mb-16 text-3xl">David Nwachukwu</h1>
        <span id="typeView"></span>
      </div>
      <div className="group mt-16 flex h-24 w-24 items-center justify-center">
        <Link
          href="/home"
          className="flex h-12 w-12 animate-bounce-vertical items-center justify-center rounded-full border border-transparent bg-purple-400 text-center text-black shadow-md shadow-purple-400 dark:text-white"
        >
          &uarr;
        </Link>
      </div>
    </div>
  );
};

export default SplashScreen;
