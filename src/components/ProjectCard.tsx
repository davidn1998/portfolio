import Image from "next/image";

type Props = {
  name: string;
  description: string;
  url: string;
  cleanURL: string;
  imgURL: string;
};

export const ProjectCard = ({
  name,
  description,
  url,
  cleanURL,
  imgURL,
}: Props) => {
  return (
    <div className="mb-10 flex flex-col">
      <a href={url} target="_blank" rel="noreferrer">
        <Image
          src={imgURL}
          alt="project"
          width={500}
          height={500}
          className="mb-6 h-60 w-full rounded-xl object-cover shadow-lg hover:animate-pulse dark:shadow-neutral-600"
        />
      </a>
      <h3 className="mb-4 font-bold">{name}</h3>
      <p className="mb-4 text-gray-400">{description}</p>
      <a
        className="group transform transition-all duration-300 ease-linear hover:text-gray-400"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <span className="mr-2">{cleanURL}</span>
        <span className="inline-block transition-transform duration-300 ease-linear group-hover:translate-x-1">
          &rarr;
        </span>
      </a>
    </div>
  );
};
