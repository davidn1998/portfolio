import { Meta } from "@/components/Meta";
import { Portfolio } from "@/components/Portfolio";
import { Skills } from "@/components/Skills";
import appDevAnim from "@/lotties/app-dev.json";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const tabItems: { [tabs: string]: { x: number; y: number; w: string } } = {
  portfolio: {
    x: 0,
    y: 0,
    w: "90px",
  },
  skills: {
    x: 122,
    y: 0,
    w: "63px",
  },
};

const Home = () => {
  const [tab, setTab] = useState("portfolio");
  const getTabContent = () => {
    switch (tab) {
      case "portfolio":
        return <Portfolio />;
      case "skills":
        return <Skills />;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-1 flex-col">
      <Meta title="David Nwachukwu" />
      <section
        id="hero"
        className="mb-14 flex flex-col items-center md:flex-row"
      >
        <div className="mr-4 flex flex-col items-center justify-center text-center md:items-start md:text-start">
          <h1 className="mb-4 text-2xl font-bold">David Nwachukwu</h1>
          <p>
            Hi ✌🏾, I&apos;m a{" "}
            <span className="font-bold text-purple-400">full stack</span>{" "}
            software engineer with a passion for
            <span className="font-bold text-purple-400"> web development</span>.
          </p>
          <br />
          <p>
            I&apos;m proficient in Python, JavaScript, TypeScript and modern web
            tools 💻. Currently my tech stack consists of NextJS, TailwindCSS &
            MongoDB.
          </p>
          <div id="socials" className="mt-5 flex w-24 justify-between">
            <a
              href="https://github.com/davidn1998"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub
                size={32}
                className="transition-all duration-200 ease-linear hover:cursor-pointer hover:text-purple-400"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/david-nwachukwu-a4449a15a/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin
                size={32}
                className="transition-all duration-200 ease-linear hover:cursor-pointer hover:text-purple-400"
              />
            </a>
          </div>
        </div>
        <div>
          <Lottie animationData={appDevAnim} />
        </div>
      </section>
      <div className="mb-6 flex border-b-2 border-gray-500 pb-2 text-lg font-bold dark:border-gray-50">
        <motion.div
          className="absolute z-[-1] h-[44px] rounded-md bg-gray-200 dark:bg-gray-700"
          initial={{ opacity: 0, x: tabItems[tab].x }}
          animate={{
            opacity: 1,
            x: (tabItems as any)[tab].x,
            width: (tabItems as any)[tab].w,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 30,
          }}
        />
        <div className="flex text-gray-700 dark:text-gray-400">
          <h3
            onClick={() => setTab("portfolio")}
            className={`mr-8 cursor-pointer rounded-md p-2 transition-colors duration-300 hover:text-black dark:hover:text-white ${
              tab === "portfolio" ? "text-black dark:text-white" : ""
            }`}
          >
            Portfolio
          </h3>
          <h3
            onClick={() => setTab("skills")}
            className={`cursor-pointer rounded-md p-2 transition-colors duration-300 hover:text-black dark:hover:text-white ${
              tab === "skills" ? "text-black dark:text-white" : ""
            }`}
          >
            Skills
          </h3>
        </div>
      </div>
      <section className="flex">{getTabContent()}</section>
    </div>
  );
};

export default Home;
