import { ReactNode } from "react";

type Props = {
  name: string;
  url: string;
  icon: ReactNode;
};

export const SkillIcon = ({ name, url, icon }: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group relative m-4 mb-8 cursor-pointer transition-all duration-300 hover:animate-pulse hover:text-purple-400"
    >
      {icon}
      <span className="sidebar-tooltip absolute w-full scale-0 text-center transition-all duration-300 group-hover:scale-100 group-hover:text-purple-400">
        {name}
      </span>
    </a>
  );
};
