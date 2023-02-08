import { ProjectCard } from "./ProjectCard";

type Props = {};

export const Portfolio = (props: Props) => {
  return (
    <div className="flex flex-col">
      <p className="mb-8 font-bold">Checkout some of my product concepts 🚀</p>
      <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          projectName="Example"
          projectDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, hic. Dignissimos non aut aliquid animi!"
          projectURL="https://github.com"
          projectCleanURL="github.com/example"
        />
        <ProjectCard
          projectName="Example"
          projectDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, hic. Dignissimos non aut aliquid animi!"
          projectURL="https://github.com"
          projectCleanURL="github.com/example"
        />
        <ProjectCard
          projectName="Example"
          projectDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, hic. Dignissimos non aut aliquid animi!"
          projectURL="https://github.com"
          projectCleanURL="github.com/example"
        />
        <ProjectCard
          projectName="Example"
          projectDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, hic. Dignissimos non aut aliquid animi!"
          projectURL="https://github.com"
          projectCleanURL="github.com/example"
        />
        <ProjectCard
          projectName="Example"
          projectDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, hic. Dignissimos non aut aliquid animi!"
          projectURL="https://github.com"
          projectCleanURL="github.com/example"
        />
        <ProjectCard
          projectName="Example"
          projectDesc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, hic. Dignissimos non aut aliquid animi!"
          projectURL="https://github.com"
          projectCleanURL="github.com/example"
        />
      </div>
    </div>
  );
};
