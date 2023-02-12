import { cva, VariantProps } from "cva";
import Link from "next/link";
import { useRouter } from "next/router";

const linkDecoration = cva(
  "absolute top-6 left-0 h-[2px] w-full bg-gray-500 transition-all duration-300 ease-in-out content-[''] group-hover:scale-x-100 dark:bg-gray-50",
  {
    variants: {
      active: {
        true: "scale-x-1",
        false: "scale-x-0",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

interface Props extends VariantProps<typeof linkDecoration> {
  label: string;
  path: string;
}

export const NavLink = ({ label, path }: Props) => {
  const router = useRouter();

  return (
    <li className="group relative mx-4 transition-all hover:cursor-pointer dark:hover:text-gray-50">
      <span
        className={linkDecoration({ active: router.asPath === path })}
      ></span>
      <Link
        href={path}
        scroll={false}
        target={label === "resume" ? "_blank" : "_self"}
      >
        {label}
      </Link>
    </li>
  );
};
