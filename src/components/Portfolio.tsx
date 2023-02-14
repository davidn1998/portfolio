import { ProjectCard } from "./ProjectCard";

type Props = {};

export const Portfolio = (props: Props) => {
  return (
    <div className="flex flex-1 flex-col">
      <p className="mb-8 font-bold">
        Checkout some of my projects 📁 and concepts 🚀
      </p>
      <div className="flex flex-col">
        <ProjectCard
          name="Charcutify"
          description="A web app built with Next.js for creating
          and visualizing custom charcuterie
          boards. Also presents visualizations and
          recipes for premade boards."
          githubURL="https://github.com/davidn1998"
          websiteURL="https://github.com/davidn1998"
          cleanURL="charcutify.com"
          imgURL="/project_thumbnails/charcutify_thumb.png"
        />
      </div>
    </div>
  );
};
