import { Meta } from "@/components/Meta";
// import floatingLaptopAnim from "@/lotties/floating-laptop.json";
import workingDevAnim from "@/lotties/working-dev.json";
import Lottie from "lottie-react";
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
      backDelay: 200,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex flex-1 flex-col items-center justify-around">
      <Meta title="David Nwachukwu" />
      <div className="flex w-full items-center justify-between rounded-2xl bg-gray-50 shadow-lg dark:bg-neutral-800 dark:shadow-neutral-800">
        <Lottie animationData={workingDevAnim} />
        <div className="w-[50%] p-16 text-3xl font-bold">
          <h1 className="mb-4 text-3xl"> &gt; David Nwachuwku</h1>
          <div>
            <span>&gt; I 💜</span> <span id="typeView"></span>
          </div>
        </div>
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
