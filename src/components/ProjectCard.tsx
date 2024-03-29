import Image from "next/image";
import { FiGithub } from "react-icons/fi";

type Props = {
  name: string;
  description: string;
  githubURL: string;
  websiteURL: string;
  cleanURL: string;
  imgURL: string;
  techIcons: {
    name: string;
    icon: JSX.Element;
  }[];
  reversed?: boolean;
};

export const ProjectCard = ({
  name,
  description,
  githubURL,
  websiteURL,
  cleanURL,
  imgURL,
  techIcons,
  reversed,
}: Props) => {
  return (
    <div
      className={`${
        reversed ? "flex-row-reverse" : "flex-row"
      } relative mb-20 mt-10 flex`}
    >
      <a
        href={websiteURL}
        target="_blank"
        rel="noreferrer"
        className="relative min-h-[400px] w-full lg:w-2/3"
      >
        <Image
          src={imgURL}
          alt="project"
          fill
          sizes="(max-width: 1024px) 100vw,
              70vw"
          className="object-cover opacity-10 shadow-xl grayscale filter transition-all duration-300 lg:opacity-100 lg:hover:filter-none"
        />
      </a>
      <div
        className={`${
          reversed ? "left-0 lg:text-left" : "right-0 lg:text-right"
        } absolute flex h-full flex-col justify-center p-8 lg:w-1/2 lg:p-0`}
      >
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="my-8 text-neutral-900 shadow-none dark:text-neutral-300 lg:bg-purple-800 lg:p-8 lg:text-white lg:shadow-2xl">
          <p className="mb-8">{description}</p>
          <ul
            className={`${
              reversed ? "lg:justify-start" : "lg:justify-end"
            } flex text-2xl`}
          >
            {techIcons.map((icon, i) => (
              <li
                key={i}
                className={`group relative ${
                  i === 0 ? "ml-0" : "ml-8"
                } cursor-pointer`}
              >
                {icon.icon}
                <span className="absolute left-1/2 top-8 w-auto min-w-max origin-top -translate-x-1/2 scale-0 rounded-md bg-gray-900 p-2 text-xs font-bold text-white shadow-md transition-all duration-300 group-hover:scale-100">
                  {icon.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`${
            reversed ? "lg:justify-start" : "lg:justify-end"
          } flex items-center`}
        >
          <a href={githubURL} target="_blank" rel="noreferrer">
            <FiGithub className="text-xl transition-all hover:text-purple-800 dark:hover:text-purple-400" />
          </a>
          <a
            className="group ml-4 transform transition-all duration-300 ease-linear hover:text-purple-800 dark:hover:text-purple-400"
            href={websiteURL}
            target="_blank"
            rel="noreferrer"
          >
            <span className="mr-2">{cleanURL}</span>
            <span className="inline-block transition-transform duration-300 ease-linear group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
