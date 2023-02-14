import Image from "next/image";
import { FiGithub } from "react-icons/fi";

type Props = {
  name: string;
  description: string;
  githubURL: string;
  websiteURL: string;
  cleanURL: string;
  imgURL: string;
};

export const ProjectCard = ({
  name,
  description,
  githubURL,
  websiteURL,
  cleanURL,
  imgURL,
}: Props) => {
  return (
    <div className="relative mb-20 mt-10 flex">
      <a
        href={githubURL}
        target="_blank"
        rel="noreferrer"
        className="relative min-h-[400px] w-full lg:w-2/3"
      >
        <Image
          src={imgURL}
          alt="project"
          fill
          // width={1657}
          // height={1017}
          className="object-cover opacity-10 shadow-xl grayscale filter transition-all duration-300 lg:opacity-100 lg:hover:filter-none"
        />
      </a>
      <div className="absolute right-0 flex flex-col self-center p-8 lg:w-1/2 lg:p-0 lg:text-right">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="my-8 text-neutral-900 shadow-2xl dark:text-neutral-300 lg:bg-purple-800 lg:p-8 lg:text-white">
          {description}
        </p>
        <div className="flex items-center lg:self-end">
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
