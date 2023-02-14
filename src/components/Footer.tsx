import Image from "next/image";
import Link from "next/link";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="container mx-auto flex items-center justify-between border-t-2 border-gray-500 p-4 text-sm opacity-100 transition-opacity duration-500 lg:max-w-5xl">
      <p>David Nwachukwu &copy; 2023</p>
      <Link href="/">
        <Image
          src="/portfolio_logo.png"
          alt="headphones"
          width={32}
          height={32}
        />
      </Link>
    </footer>
  );
};
