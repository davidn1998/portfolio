import { Meta } from "@/components/Meta";
import workingDevAnim from "@/lotties/working-dev.json";
import { JetBrains_Mono, Yellowtail } from "@next/font/google";
import Lottie from "lottie-react";
import Link from "next/link";
import { useEffect } from "react";
import Typed from "typed.js";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const yellowtail = Yellowtail({ weight: "400", subsets: ["latin"] });

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
      <div className="flex w-full flex-col-reverse items-center justify-between rounded-2xl bg-gray-50 shadow-lg dark:bg-neutral-800 dark:shadow-neutral-800 md:flex-row">
        <Lottie animationData={workingDevAnim} />
        <div className="w-full p-10 text-xl font-bold md:w-[50%] md:p-16 md:text-2xl">
          <h1 className={`mb-4 text-4xl ${yellowtail.className}`}>
            {" "}
            David Nwachukwu
          </h1>
          <div className={`${jetbrainsMono.className}`}>
            <span>&gt; I 💜</span> <span id="typeView"></span>
          </div>
        </div>
      </div>
      <div className="group mt-16 flex h-24 w-24 items-center justify-center">
        <Link
          href="/home"
          className="flex h-16 w-24 animate-bounce-vertical items-center justify-center rounded-3xl bg-purple-400 text-center font-bold text-black shadow-md shadow-purple-400 dark:text-white"
        >
          Enter
        </Link>
      </div>
    </div>
  );
};

export default SplashScreen;
