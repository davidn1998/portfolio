import { ReactNode } from "react";
import { Meta } from "./Meta";
import { NavBar } from "./NavBar";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <NavBar />
      <main className="container mx-auto mt-8 flex min-h-screen flex-col px-8 md:mt-32 lg:max-w-5xl">
        {children}
      </main>
    </>
  );
};
