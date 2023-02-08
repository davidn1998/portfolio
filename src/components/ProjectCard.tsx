import Image from "next/image";

type Props = {
  projectName: string;
  projectDesc: string;
  projectURL: string;
  projectCleanURL: string;
};

export const ProjectCard = ({
  projectName,
  projectDesc,
  projectURL,
  projectCleanURL,
}: Props) => {
  return (
    <div className="mb-10 flex flex-col">
      <a href={projectURL} target="_blank" rel="noreferrer">
        <Image
          src="/project_placeholder.jpeg"
          alt="project"
          width={500}
          height={500}
          className="mb-6 h-60 w-full rounded-xl object-cover shadow-lg hover:animate-pulse dark:shadow-neutral-600"
        />
      </a>
      <h3 className="mb-4 font-bold">{projectName}</h3>
      <p className="mb-4 text-gray-400">{projectDesc}</p>
      <a
        className="group transform transition-all duration-300 ease-linear hover:text-gray-400"
        href={projectURL}
        target="_blank"
        rel="noreferrer"
      >
        <span className="mr-2">{projectCleanURL}</span>
        <span className="inline-block transition-transform duration-300 ease-linear group-hover:translate-x-1">
          &rarr;
        </span>
      </a>
    </div>
  );
};
