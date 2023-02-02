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
      className="group relative m-4 mb-8 cursor-pointer hover:animate-pulse"
    >
      {icon}
      <span className="sidebar-tooltip absolute w-full scale-0 text-center transition-all duration-300 group-hover:scale-100">
        {name}
      </span>
    </a>
  );
};
