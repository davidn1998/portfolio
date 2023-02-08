import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Meta } from "./Meta";
import { NavBar } from "./NavBar";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const { asPath } = useRouter();
  const variants = {
    out: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.75,
        ease: "easeInOut",
      },
    },
    in: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
      },
    },
  };
  return (
    <div className="flex min-h-screen flex-col">
      <Meta />
      <NavBar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={asPath}
          variants={variants}
          initial="out"
          animate="in"
          exit="out"
          className="flex flex-1 flex-col"
        >
          <main className="container mx-auto mt-16 flex flex-1 flex-col px-8 lg:max-w-5xl">
            {children}
            {asPath === "/" ? <></> : <Footer />}
          </main>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
